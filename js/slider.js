fetch('../img/slider/meta.json')
  .then((res) => res.json())
  .then((json) => {

    function set_slide(n) {
      console.log(`page(${n})`);
      let
        header = document.querySelector('.slider>span:first-child'),
        description = document.querySelector('.slider>span:nth-child(3n)'),
        image = document.querySelector('.slider>img')

      header.innerHTML = json[n].title;
      description.innerHTML = json[n].description;
      image.src = json[n].path;
    }

    let
      current_slide = 0,
      sum = json.length - 1,
      chev = document.querySelectorAll('.slider>div');
    console.log(chev);

    chev[0].addEventListener('click', () => {
      current_slide > 0 ?
        current_slide-- : current_slide = sum

      set_slide(current_slide);
    });
    chev[1].addEventListener('click', () => {
      current_slide < sum ?
        current_slide++ : current_slide = 0;

      set_slide(current_slide);
    });


    set_slide(current_slide);
  });

