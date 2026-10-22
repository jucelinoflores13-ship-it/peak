# Peak SEP — protótipo web de Auto Contratação

Site estático responsivo (HTML + CSS + JavaScript) inspirado nas referências visuais fornecidas. Contém a logomarca fornecida, tela de CPF, painel lateral com WhatsApp e tela de termos com **as 11 seções e as cláusulas enviadas**.

## Abrir e testar

1. Extraia o ZIP.
2. Abra `index.html` em um navegador. O site funciona sem instalação de dependências, contas, API ou servidor.
3. Digite um CPF com dígitos verificadores válidos para testar o fluxo de navegação; os dígitos não são enviados, guardados no navegador ou mostrados nos termos.
4. Marque os termos para habilitar o botão "ASSINAR DIGITALMENTE". O botão abre um aviso de demonstração — ele **não assina documentos**.
5. No canto esquerdo, abra o menu e teste o link do WhatsApp (11) 96713-3595.

## Publicar com Vercel

- Suba `index.html`, `styles.css`, `script.js` e a pasta `assets` na **raiz** de um repositório GitHub novo.
- Importe o repositório pela Vercel, selecione **Framework Preset: Other** e deixe o diretório de saída em branco (site estático).
- A publicação substituirá o conteúdo anterior somente se você realizar deploy nesse mesmo projeto da Vercel; para não perder a página anterior, crie um projeto novo.

## Limitações importantes

- É um **protótipo**, sem banco de dados, consulta de CPF, autenticação ou API.
- Valida apenas o formato e os dígitos verificadores do CPF localmente. Isto não prova identidade, titularidade ou existência de contrato.
- Não faz assinatura digital, não gera certificado ou comprovante e não altera a situação de dívidas.
- Os textos contratuais foram copiados conforme fornecidos e **não passaram por revisão jurídica**. As frases sobre efeitos legais não são uma garantia de validade. Para uso real: obter revisão jurídica, confirmar autorização de uso da marca Peak, definir política de privacidade/LGPD e integrar autenticação e fornecedor apropriado de assinaturas eletrônicas.
- Somente o WhatsApp informado foi incorporado como contato; telefone/e-mail mostrados em prints antigos de outra marca não foram apresentados como canais oficiais da Peak.

## Estrutura

- `index.html` — acessibilidade, conteúdo e 11 seções de cláusulas.
- `styles.css` — layout responsivo e efeitos visuais.
- `script.js` — fluxo local de CPF, menu, checkbox e modal informativo.
- `assets/peak-sep-logo-white.png` — logomarca adaptada da imagem enviada para fundo azul.
- `assets/peak-sep-logo-color.png` — logomarca em versão para fundo claro.
- `assets/favicon.svg` — ícone do site.
