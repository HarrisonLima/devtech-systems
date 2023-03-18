const inputUsuario = document.getElementById("login__input--usuario");
const inputSenha = document.getElementById("login__input--senha");
const button = document.getElementById("login__button");

function valid(){
  if(inputUsuario.value == '' || inputSenha.value == ''){
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

function login(){
    if(inputUsuario.value == '' || inputSenha.value == ''){
      alert('Usuario ou Senha inválido');
      return false;
    } 
    window.location.href = "../html/home.html";
}

function statusVisible(){
  var visiblePassword = document.getElementById("login__input--senha");
  if(visiblePassword.type === "password"){
    visiblePassword.type = "text";
  } else {
    visiblePassword.type = "password";
  }
}