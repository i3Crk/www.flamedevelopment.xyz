const userInput = document.getElementById("userInput")
const passInput = document.getElementById("passInput")
const loginSubmit = document.querySelector(".loginSubmit")

loginSubmit.addEventListener('click', function(){
    this.classList.remove('animate');
    setTimeout(() => { this.classList.add('animate'); }, 100);
  });
  