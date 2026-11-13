/**
 * Convite Sarah & Fellipe — integração com Google Sheets
 *
 * Este script deve ser criado em Extensões > Apps Script
 * dentro da própria planilha de confirmações.
 */

const SHEET_NAME = 'Respostas';

function doPost(e) {
  try {
    const params = (e && e.parameter) ? e.parameter : {};

    const guestName = clean_(params.guestName, 120);
    const attendance = clean_(params.attendance, 100);
    const companionCount = Math.max(0, Math.min(10, Number(params.companionCount || 0)));
    let companions = [];

    try {
      companions = JSON.parse(params.companions || '[]');
    } catch (_) {
      companions = [];
    }

    if (!guestName) {
      return json_({ ok: false, error: 'Nome do convidado não informado.' });
    }

    const allowedAnswers = [
      'Sim, confirmo minha presença!',
      'Infelizmente, não poderei comparecer.'
    ];
    if (!allowedAnswers.includes(attendance)) {
      return json_({ ok: false, error: 'Resposta de presença inválida.' });
    }

    if (!Array.isArray(companions)) companions = [];
    companions = companions
      .slice(0, 10)
      .map(name => clean_(name, 100))
      .filter(Boolean);

    const attending = attendance === 'Sim, confirmo minha presença!';
    if (!attending) companions = [];

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);

    const headers = [
      'Data e hora',
      'Nome do convidado',
      'Presença',
      'Quantidade de acompanhantes',
      'Acompanhantes'
    ];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      sheet.setFrozenRows(1);
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      sheet.appendRow([
        new Date(),
        guestName,
        attendance,
        companions.length,
        companions.join(', ')
      ]);
    } finally {
      lock.releaseLock();
    }

    return json_({ ok: true });
  } catch (error) {
    console.error(error);
    return json_({ ok: false, error: 'Erro interno ao registrar confirmação.' });
  }
}

function clean_(value, maxLength) {
  return String(value || '')
    .replace(/[\\u0000-\\u001F\\u007F]/g, ' ')
    .trim()
    .slice(0, maxLength);
}

function json_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
