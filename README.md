# Peak SEP — Atualização de privacidade na URL

## O que mudou
- O CPF não é colocado na URL nem quando o formulário é enviado.
- Campo de CPF sem atributo `name`, impedindo sua inclusão automática em parâmetros GET mesmo se o JavaScript falhar.
- O JavaScript usa `event.preventDefault()` para navegar dentro da página sem enviar o formulário.
- Qualquer parâmetro de consulta preexistente no endereço (ex.: `?cpf=...`) é retirado pelo `history.replaceState` ao abrir o site.
- A política `referrer` está em `no-referrer` para evitar propagação do endereço em solicitações para outros sites.

## Publicação
Substitua o `index.html` na raiz do projeto no GitHub. Preserve a pasta `assets/` para exibir as logos. Depois faça `git add .`, `git commit -m "CPF fora da URL"` e `git push origin main`.

## Atenção
Se o CPF já apareceu em uma URL publicada ou compartilhada, limpar o endereço atual não elimina cópias anteriores no histórico, registros de acesso ou mensagens. Apague URLs antigas do histórico e evite compartilhar links com informações pessoais.

## Funcionalidade
A navegação e a tela de confirmação são locais. Não há autenticação de CPF, conexão com banco de dados nem assinatura eletrônica válida.
