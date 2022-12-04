try {
  fetch('../meta/slider.json')
    .then((res) => res.json())
    .then((json) => {

      function set_slide(n) {
        let
          header = document.querySelector('.slider>span:first-of-type'),
          description = document.querySelector('.slider>span:last-of-type'),
          image = document.querySelector('.slider>img')

        header.innerHTML = json[n].title;
        description.innerHTML = json[n].description;
        image.src = json[n].path;
      }

      let
        current_slide = 0,
        sum = json.length - 1,
        chev = document.querySelectorAll('.slider>div');

      set_slide(current_slide);

      chev[0].addEventListener('click', () => {
        current_slide > 0 ?
          current_slide-- : current_slide = sum

        set_slide(current_slide);
      });
      chev[1].addEventListener('click', () => {
        current_slide < sum ?
          current_slide++ : current_slide = 0;

        set_slide(current_slide);
      })
    })
} catch (err) { console.log(err) }