'use strict';
// Validação local: o CPF não é transmitido, salvo, registrado ou incluído na URL.
const $=id=>document.getElementById(id);
const elements={
  drawer:$('contact-drawer'),scrim:$('menu-scrim'),openMenu:$('menu-open'),closeMenu:$('drawer-close'),
  cpfForm:$('cpf-form'),cpf:$('cpf-input'),cpfField:$('cpf-field'),cpfError:$('cpf-error'),
  stepCPF:$('step-cpf'),stepTerms:$('step-terms'),stepSuccess:$('step-success'),accept:$('accept-terms'),
  sign:$('sign-button'),termsScroll:$('terms-scroll'),startOver:$('start-over'),successTime:$('success-time')
};
let lastFocus=null;
function setDrawer(isOpen){
  elements.drawer.classList.toggle('open',isOpen);
  elements.drawer.setAttribute('aria-hidden',String(!isOpen));
  elements.drawer.inert=!isOpen;
  elements.scrim.hidden=!isOpen;
  elements.openMenu.setAttribute('aria-expanded',String(isOpen));
  document.body.classList.toggle('drawer-open',isOpen);
  if(isOpen){lastFocus=document.activeElement;elements.closeMenu.focus();}
  else if(lastFocus&&typeof lastFocus.focus==='function'){lastFocus.focus();}
}
function openTerms(readOnly=false){
  setDrawer(false);
  elements.stepCPF.hidden=true;
  elements.stepTerms.hidden=false;
  elements.stepSuccess.hidden=true;
  elements.accept.checked=false;
  elements.accept.disabled=readOnly;
  elements.sign.disabled=true;
  elements.sign.title=readOnly?'Volte ao início e informe um CPF válido para continuar':'';
  elements.termsScroll.scrollTop=0;
  elements.stepTerms.querySelector('h1').focus?.();
  window.scrollTo({top:0,behavior:'instant'});
}
function openCPF(){
  setDrawer(false);
  elements.stepCPF.hidden=false;
  elements.stepTerms.hidden=true;
  elements.stepSuccess.hidden=true;
  elements.cpf.value='';
  elements.cpfError.textContent='';
  elements.cpfField.classList.remove('invalid');
  elements.cpf.setAttribute('aria-invalid','false');
  elements.accept.checked=false;
  elements.accept.disabled=false;
  elements.sign.disabled=true;
  window.scrollTo({top:0,behavior:'instant'});
}
function formatCPF(value){
  const d=value.replace(/\D/g,'').slice(0,11);
  return d.replace(/^(\d{3})(\d)/,'$1.$2').replace(/^(\d{3})\.(\d{3})(\d)/,'$1.$2.$3').replace(/(\d{3}\.\d{3}\.\d{3})(\d{1,2})$/,'$1-$2');
}
function validCPF(value){
  const d=value.replace(/\D/g,'');
  if(d.length!==11||/^(\d)\1{10}$/.test(d))return false;
  for(let n=9;n<11;n++){
    let sum=0;
    for(let i=0;i<n;i++)sum+=Number(d[i])*(n+1-i);
    let mod=(sum*10)%11;
    if(mod===10)mod=0;
    if(mod!==Number(d[n]))return false;
  }
  return true;
}
function setCPFError(message){
  elements.cpfError.textContent=message;
  elements.cpfField.classList.toggle('invalid',Boolean(message));
  elements.cpf.setAttribute('aria-invalid',String(Boolean(message)));
}
elements.openMenu.addEventListener('click',()=>setDrawer(true));
elements.closeMenu.addEventListener('click',()=>setDrawer(false));
elements.scrim.addEventListener('click',()=>setDrawer(false));
$('view-terms').addEventListener('click',()=>openTerms(true));
$('back-home').addEventListener('click',openCPF);
$('step-back').addEventListener('click',openCPF);
elements.cpf.addEventListener('input',()=>{elements.cpf.value=formatCPF(elements.cpf.value);if(elements.cpfError.textContent)setCPFError('');});
elements.cpfForm.addEventListener('submit',event=>{
  event.preventDefault();
  if(!validCPF(elements.cpf.value)){
    setCPFError('Informe um CPF válido para continuar.');
    elements.cpf.focus();
    return;
  }
  // Não reter CPF após validação local.
  elements.cpf.value='';
  setCPFError('');
  openTerms(false);
});
elements.accept.addEventListener('change',()=>{elements.sign.disabled=!elements.accept.checked||elements.accept.disabled;});
function completePresentationFlow(){
  if(elements.sign.disabled || !elements.accept.checked || elements.accept.disabled) return;
  setDrawer(false);
  elements.stepCPF.hidden=true;
  elements.stepTerms.hidden=true;
  elements.stepSuccess.hidden=false;
  // Apenas horário exibido no dispositivo; não há emissão de recibo ou registro remoto.
  const formatted=new Intl.DateTimeFormat('pt-BR', {dateStyle:'long',timeStyle:'short'}).format(new Date());
  elements.successTime.textContent=`Confirmação em ${formatted}`;
  window.scrollTo({top:0,behavior:'instant'});
  $('success-title').focus({preventScroll:true});
}
elements.sign.addEventListener('click',completePresentationFlow);
elements.startOver.addEventListener('click',()=>{openCPF();elements.cpf.focus();});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape' && elements.drawer.classList.contains('open')) setDrawer(false);
});
