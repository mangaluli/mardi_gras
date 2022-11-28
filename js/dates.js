fetch('../meta/dates.json')
  .then((res) => res.json())
  .then((json) => json.forEach((date) => {
    let _date = document.createElement('div');
    _date.className = 'date';

    _date.innerHTML = `
      <span>${date.day}</span>
      <span>${date.month}</span>
      <span>${date.year}</span>
    `
    document.querySelector('.dates').appendChild(_date);
  }));
