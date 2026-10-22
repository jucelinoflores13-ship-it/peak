# Peak SEP — apresentação do fluxo de Auto Contratação

Página web estática para **apresentação de entrevista**. Replica o design solicitado e apresenta o fluxo CPF → termos → confirmação visual.

## Usar

1. Abra `index.html` no navegador ou publique a pasta inteira na Vercel/GitHub Pages.
2. Informe um CPF matematicamente válido para abrir os termos (a validação ocorre apenas no navegador e o número digitado é descartado em seguida).
3. Leia as 11 seções, marque a concordância e clique em **ASSINAR DIGITALMENTE** para ver a nova tela estilizada de conclusão.
4. Clique em **VOLTAR AO INÍCIO** para repetir o fluxo durante a entrevista. O menu oferece um link ao WhatsApp (11) 96713-3595.

## Importante para apresentação/produção

**Esta versão é uma interface demonstrativa.** A etapa final **simula a aparência da confirmação** e não produz uma assinatura eletrônica ou certificado, não cria registro legal nem armazena CPF/aceite no servidor. O horário exibido é o do dispositivo. O site não consulta banco de dados nem comprova identidade ou quitação de dívida.

Para colocar em produção são necessários: autorização de uso da marca Peak SEP; validação de identidade; backend seguro; política LGPD; base de dados; fornecedor de assinatura eletrônica com evidências verificáveis; revisão jurídica integral dos termos; remoção da simulação de sucesso até o provedor retornar confirmação real.

## Arquivos

- `index.html`: telas, conteúdo dos termos e componentes acessíveis;
- `styles.css`: design responsivo e animação de conclusão;
- `script.js`: CPF local, navegação, menu e confirmação visual;
- `assets/`: logotipo e favicon.
