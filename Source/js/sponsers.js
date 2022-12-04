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