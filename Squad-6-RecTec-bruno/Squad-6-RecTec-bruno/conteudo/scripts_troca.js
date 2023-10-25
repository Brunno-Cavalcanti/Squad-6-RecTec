const password = document.getElementById('password');
const icon = document.getElementById('icon');

function showHide() {
   if(password.type === 'password'){
      password.setAttribute('type','text');
      icon.classList.add('hide');
   }
   else{
      password.setAttribute('type','password');
      icon.classList.remove('hide')
   }
}

const passwords = document.getElementById('senha');
const icons = document.getElementById('icone');

function showHides() {
   if(passwords.type === 'password'){
      passwords.setAttribute('type','text');
      icons.classList.add('hides');
   }
   else{
      passwords.setAttribute('type','password');
      icons.classList.remove('hides')
   }
}