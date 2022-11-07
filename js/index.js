// Slider
fetch('../img/slider/meta.json')
  .then(res => res.json())
  .then(data => {
    slider(data);
  });

function slider(data) {
  let
    current_slide,
    total_slides = data.length;
    frame = document.getElementById('frame');
  
  document.getElementById('chevron-left').addEventListener('click', slider_left);
  document.getElementById('chevron-right').addEventListener('click', slider_right);

  slider_goto(0);
  
  function slider_left() {
    if (current_slide) {
      slider_goto(current_slide - 1);
    }
  }

  function slider_right() { 
    if (current_slide < total_slides-1) {
      slider_goto(current_slide + 1);
    }
  }

  function slider_goto(n) {
    const header = document.createElement('h2');
    header.innerHTML = data[n].title;
    header.setAttribute('class','p-2 text-3xl lg:text-4xl text-cc2 text-center bg-cc1 bg-opacity-60');

    const img = document.createElement('img');
    img.setAttribute('src', data[n].path);
    img.setAttribute('class','relative object-contain object-center w-full h-full lg:h-[50vh]');

    const description = document.createElement('p');
    description.innerHTML = data[n].description;
    description.setAttribute('class','p-2 text-md lg:text-lg text-cc2 text-justify leading-6 bg-cc1 bg-opacity-60');


    frame.innerHTML = '';
    frame.appendChild(header);
    frame.appendChild(img);
    frame.appendChild(description);

    current_slide = n;
  }
}


// Navbar
document.getElementById('burgir').addEventListener('click', toggle_nav);
document.getElementById('burgir').addEventListener('focusout', close_nav);

function toggle_nav() {
  let nav = document.getElementById('nav-dropdown');
  nav.classList.toggle('hidden');
}
function close_nav() {
  let nav = document.getElementById('nav-dropdown');
  nav.classList.add('hidden');
}
