# Peak SEP — Portal de Auto Contratação

## Abrir / publicar

O arquivo `index.html` possui o CSS e o JavaScript embutidos. Basta substituir o `index.html` antigo e conservar a pasta `assets/` com as imagens de logo e favicon. Para uma instalação nova, envie `index.html` e a pasta `assets/` para a raiz do repositório usado na Vercel.

## Fluxo de apresentação

1. Digite 11 números no campo CPF, por exemplo `00522244900`. A interface mostra `005.222.449-00` durante a digitação.
2. Clique em **AVANÇAR** para ir aos termos.
3. Marque o checkbox e clique em **ASSINAR DIGITALMENTE** para visualizar a confirmação local.
4. Clique em **VOLTAR AO INÍCIO** para reiniciar.
5. Clique nos três traços para abrir/fechar o menu. `Esc` também fecha o menu.

## Limites atuais

Esta implementação é um fluxo visual para apresentação. A entrada de CPF tem **máscara e conferência de 11 dígitos**, mas **não consulta nem autentica o CPF**. A confirmação não emite contrato legal, não gera assinatura eletrônica válida, não envia dados e não grava aceite em banco de dados. Para utilização real, integrar autenticação, dados das operações, serviço de assinatura eletrônica e armazenamento seguro conforme a LGPD. Antes de uso jurídico real, o texto contratual deve ser revisado pela equipe jurídica.
