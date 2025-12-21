/*
  Simple client-side password gate.
  Change `PASSWORD` below to the password you want to use.
  NOTE: This is client-side only and NOT secure for protecting sensitive documents.
*/
document.addEventListener('DOMContentLoaded', function(){
  const PASSWORD = 'change-me'; // <-- replace with your password
  const gate = document.getElementById('password-gate');
  const content = document.getElementById('protected-content');
  const input = document.getElementById('pg-password');
  const btn = document.getElementById('pg-submit');

  function unlock(p){
    if(p === PASSWORD){
      sessionStorage.setItem('pg_auth','1');
      if(gate) gate.style.display = 'none';
      if(content) content.style.display = '';
    } else {
      alert('Incorrect password');
    }
  }

  if(sessionStorage.getItem('pg_auth') === '1'){
    if(gate) gate.style.display = 'none';
    if(content) content.style.display = '';
  } else {
    if(gate) gate.style.display = 'flex';
    if(content) content.style.display = 'none';
  }

  if(btn){
    btn.addEventListener('click', function(){ unlock(input.value); });
  }
  if(input){
    input.addEventListener('keydown', function(e){ if(e.key === 'Enter') unlock(input.value); });
  }
});
