document.querySelectorAll('nav>span').forEach((btn, i) => {
  btn.addEventListener('click', () => change_page(i));
});

function change_page(n) {
  document.querySelectorAll('.page').forEach((page, i) => n == i ? page.style.display = 'flex' : page.style.display = 'none');

  document.querySelectorAll('nav>span').forEach((btn, i) => n == i ? btn.classList.add('active') : btn.classList.remove('active'));

  document.querySelector('body').scrollIntoView();

}

change_page(0);