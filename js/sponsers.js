{/* 
  <div class="cards">
    <div class="card">
      <img src="img/sponsers/1.jpg"> // img/sponsers/${i}.jpg
        <div class="popup">
          <span>TITLE</span> // sponser.title
          <span>DESCRIPTION</span> // sponser.description
          <div>
            <div class="website" onclick="javascript:window.location.href='https://www.ritzcarlton.com/en/hotels/new-orleans'">
            </div>
            <div class="facebook" href="https://www.facebook.com/ritzcarlton"></div>
            <div class="twitter" href="https://twitter.com/ritzcarlton"></div>
            <div class="instegram" href="https://www.instagram.com/ritzcarlton/"></div>
          </div>
        </div>
    </div>
  </div> 
*/}

fetch('../meta/sponsers.json')
  .then((res) => res.json())
  .then((json) => json.forEach((sponser) => {
    let
      card = document.createElement('div'),
      img = document.createElement('img'),
      popup = document.createElement('div'),
      name = document.createElement('span'),
      description = document.createElement('span'),
      links = document.createElement('div');



    card.className = 'card';
    popup.className = 'popup';

    img.src = sponser.img;
    card.appendChild(img);

    name.innerHTML = sponser.name;
    popup.appendChild(name);

    description.innerHTML = sponser.description;
    popup.appendChild(description);


    // if (sponser.links.website) {
    //   let website = document.createElement('div');
    //   website.className = 'website';
    // }

    for (const [type, link] of Object.entries(sponser.links)) {
      let button = document.createElement('button');
      button.className = type;
      button.addEventListener('click', () => window.location.href = link);
      links.appendChild(button);
    }

    popup.appendChild(links);
    card.appendChild(popup);

    document.querySelector('.cards').appendChild(card);
  }));