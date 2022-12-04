document.querySelectorAll('.qa').forEach((qa, n) => qa.addEventListener('click', () => change_faq(n)));

function change_faq(n) {
  document.querySelectorAll('.qa').forEach((qa, i) => n == i ? qa.classList.add('active') : qa.classList.remove('active'));
}