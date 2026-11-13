# Convite Sarah & Fellipe

Convite digital estático, pronto para hospedagem no **GitHub Pages**.

## Arquivos

- `index.html` — página completa do convite. As imagens estão incorporadas no próprio HTML, portanto não há pasta de imagens necessária.
- `.nojekyll` — evita o processamento Jekyll padrão do GitHub Pages.
- `README.md` — estas instruções.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub. Sugestão de nome: `convite-sarah-fellipe`.
2. Deixe o repositório **Public** (ou confirme que seu plano permite GitHub Pages em repositórios privados).
3. Envie os três arquivos desta pasta para a raiz do repositório:
   - `index.html`
   - `.nojekyll`
   - `README.md`
4. No GitHub, abra **Settings → Pages**.
5. Em **Build and deployment**, escolha:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
6. Clique em **Save** e aguarde a publicação.
7. O GitHub mostrará o endereço público do convite na própria seção **Pages**, normalmente no formato:
   `https://SEU-USUARIO.github.io/convite-sarah-fellipe/`

## Teste antes de publicar

Abra `index.html` no navegador do computador e também teste no celular. Confira:
- abertura do envelope e navegação entre as páginas;
- links do mapa;
- seleção de presença;
- contador e nomes dos acompanhantes;
- validação de campos vazios;
- abertura do WhatsApp com a mensagem preenchida.

## Como atualizar o convite

Edite o `index.html` e envie a nova versão para a raiz do mesmo repositório, substituindo o arquivo anterior. O GitHub Pages publica a atualização automaticamente após o processamento.

## Como funciona a confirmação

Atualmente, o formulário monta uma mensagem e abre o WhatsApp dos noivos (`wa.me`). **As respostas não são armazenadas automaticamente em uma planilha ou banco de dados.** Para isso, será necessário integrar um serviço externo, como Google Sheets via Google Apps Script.

## Observações

- O convite carrega as fontes do Google Fonts pela internet. Se o visitante estiver sem conexão, o navegador usará fontes alternativas.
- O número de WhatsApp e o conteúdo do convite ficam visíveis no código-fonte do site. Não coloque senhas, tokens ou dados privados neste repositório.
