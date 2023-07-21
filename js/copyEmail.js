const button = document.querySelector('.copy-btn');

  function copyEmail() {
    const email = document.querySelector(".footer__link");
     button.addEventListener('click', navigator.clipboard.writeText(email.textContent));
     button.removeEventListener('focus', 
     button.addEventListener('click', function () {
        setTimeout(() => { button.innerHTML='<i class="fa-solid fa-copy"></i> Copiado!' }, 50);
        setTimeout(() => { button.innerHTML='<i class="fa-solid fa-copy"></i> Copiar'  }, 3500);
    }))
}
