let
  burger = document.querySelector('.burgir'),
  nav = document.querySelector('nav');


function toggle_nav() {
  burger.classList.toggle('open');
  nav.classList.toggle('open');
}

burger.addEventListener('click', () => {
  toggle_nav();
});

nav.addEventListener('click', () => {
  nav.classList.contains('open') ? toggle_nav() : null;
});
