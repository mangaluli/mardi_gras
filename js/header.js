let
  nav = document.querySelector('header>nav'),
  burger = document.querySelector('header>.burgir');

nav.addEventListener('click', () => nav.classList.toggle('open'));
burger.addEventListener('click', () => nav.classList.toggle('open'));