for (let i = 0; i < 8; i++) {
  document.cookie[i];
}

document.querySelectorAll('nav>span').forEach((btn, i) => btn.addEventListener('click', () => change_page(i)));

function change_page(n) {
  document.querySelectorAll('.page').forEach((page, i) => n == i ? page.style.display = 'flex' : page.style.display = 'none');
  document.querySelectorAll('nav>span').forEach((btn, i) => n == i ? btn.classList.add('active') : btn.classList.remove('active'));
  document.querySelector('body').scrollIntoView();

  document.cookie = `page=${n}`;
}

decodeURIComponent(document.cookie).split(';').forEach((coockie) => {
  let _cookie = coockie.split('=');
  _cookie[0].trim() == 'page' ? change_page(_cookie[1]) : change_page(0);
})