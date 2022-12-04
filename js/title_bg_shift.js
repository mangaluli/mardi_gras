

function shift() {
  let titles = document.querySelectorAll('.article>span:first-of-type');
  titles.forEach((title) =>
    title.style.backgroundPosition = `center ${title.getBoundingClientRect().bottom * -1}px`
  );
}

shift();
window.addEventListener('scroll', shift);
window.addEventListener('resize', shift);