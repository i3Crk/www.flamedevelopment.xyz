function animateButton() {
    let loginSubmit = document.querySelector('.loginSubmit');
    loginSubmit.style.animation = 'shrink-grow 200ms';
    setTimeout(() => {
      loginSubmit.style.animation = '';
    }, 200);
  }
  