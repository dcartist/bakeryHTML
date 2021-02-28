console.log("Hello!!")
let SignupInput = document.getElementById('SignupInput').value;
let Modal = document.getElementById('Modal').classList;
let loginButton = document.getElementById('login');
let signUpButton = document.getElementById('signUp');
let closeModal = document.getElementById('close');
let Message = document.getElementById('message')
var emailValidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
console.log("test")
console.log(signUpButton)
function emailSignUp(e){
    console.log(SignupInput)
}
function validateLogin(){
if (SignupInput.match(emailValidate)){
    console.log("valid email")
    console.log()
} else {
    console.log ("not valido")
}
}
signUpButton.onclick = function(){
    console.log("click")
    validateLogin()
}
loginButton.onclick = function() {
    Modal.add("show")
    Modal.remove("hide")
  }

  closeModal.onclick = function(){
    Modal.add("hide")
    Modal.remove("show")
  }