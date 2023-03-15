document.querySelector('.loginSubmit').addEventListener('click', function(){
    this.classList.remove('animate');
    setTimeout(() => { this.classList.add('animate'); }, 100);
  });
  