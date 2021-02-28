console.log("Hello!!")
let SignupInput = document.getElementById('SignupInput').value;
let Modal = document.getElementById('Modal').classList;
let loginButton = document.getElementById('login');
let signUpButton = document.getElementById('signUp');
let closeModal = document.getElementById('close');
let Message = document.getElementById('message')
var emailValidate = /^[^@]+@\w+(\.\w+)+\w$/
console.log("test")
console.log(signUpButton)
function emailSignUp(e){
    console.log(SignupInput)
}
function validateLogin(){
let Input = document.getElementById('SignupInput').value;
if (Input.match(emailValidate)){
    Message.innerText = "Congrats Your email Works"
} else {
    Message.innerText = "I'm sorry your email is invalid"
    // console.log(Input)
    // console.log (/^[^@]+@\w+(\.\w+)+\w$/.test(SignupInput))
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