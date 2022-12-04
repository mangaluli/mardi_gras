try {
  fetch("../meta/dates.json").then(a => a.json()).then(a => a.forEach(a => {
    let e = document.createElement("div"); e.className = "date", e.innerHTML = `
      <span>${a.year}</span>
      <span>${a.day}</span>
      <span>${a.month}</span>
    `, document.querySelector(".dates").appendChild(e)
  }))
} catch (a) { console.log(a) }