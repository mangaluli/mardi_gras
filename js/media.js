{// Fullscreen Image offset
  function frameY() {
    let
      frame = document.querySelector('.fullscreen-image div'),
      img = document.querySelector('.fullscreen-image div img').getBoundingClientRect(),
      gallery = document.querySelector('.gallery').getBoundingClientRect();

    // console.log(img.top + img.height);
    // console.log(gallery.bottom);

    if (img.top + img.height >= gallery.bottom) {
      frame.style.top = `${window.scrollY - img.height + gallery.bottom - 85}px`;
    }
    console.log('window.scrollY ' + window.scrollY);
    console.log('img.height ' + img.height);
    console.log('gallery.height ' + gallery.height);
    if (window.scrollY < gallery.height - img.height) {

      frame.style.top = `${window.scrollY}px`;
    }
  }

  frameY();
  window.addEventListener('scroll', frameY);
  window.addEventListener('resize', frameY);
}

{// Gallery image loader
  let
    cols = document.querySelectorAll('.gallery>.col'),
    col_counter = 1;

  for (let i = 1; i < 20; i++) {
    let img = document.createElement('img');
    img.src = `img/gallery/lq/${i}.jpg`;
    cols[col_counter - 1].appendChild(img)

    col_counter % cols.length ? col_counter++ : col_counter = 1;
  }
}

{// Open fullscreen image preview

  let cols = document.querySelectorAll('.gallery > .col');

  cols.forEach((col, i) => {
    col.querySelectorAll('img').forEach(
      (img, j) => {
        img.addEventListener('click', () => {
          document.querySelector('.fullscreen-image > div > img').src = `img/gallery/${img.src.split('/').pop()}`;
          document.querySelector('.fullscreen-image').style.display = 'block';
        })
      }
    )
  }
  )
}

{// Close fullscreen image preview
  document.querySelector('.fullscreen-image>div>button').addEventListener('click', () => document.querySelector('.fullscreen-image').style.display = 'none');
}
