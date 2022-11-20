function createGame (player1, hour, player2) {
  return `
        <li>
          <img src="./assets/icons/${player1}.png" alt="Bandeira do ${player1}">
          <strong>${hour}</strong>
          <img src="./assets/icons/${player2}.png" alt="Bandeira da ${player2}">
        </li>
  `
}
let delay = 0;
function createCard (date, day, games) {
  delay += 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
    createCard("20/11", "dom", 
      createGame('cat', '13:00', 'equ')
    ) +
    createCard("21/11", "seg", 
      createGame('ing', '10:00', 'ira') +
      createGame('sen', '13:00', 'hol') +
      createGame('eua', '16:00', 'gal') 
    ) +
    createCard("22/11", "ter", 
      createGame('arg', '07:00', 'ara') +
      createGame('din', '10:00', 'tun') +
      createGame('mex', '13:00', 'pol') +
      createGame('fra', '16:00', 'aus')
    ) +
    createCard("23/11", "qua", 
      createGame('mar', '07:00', 'cro') +
      createGame('ale', '10:00', 'jap') +
      createGame('esp', '13:00', 'cos') +
      createGame('bel', '16:00', 'can')
    ) +
    createCard("24/11", "qui", 
      createGame('sui', '07:00', 'cam') +
      createGame('uru', '10:00', 'cor') +
      createGame('por', '13:00', 'gan') +
      createGame('bra', '16:00', 'ser')
    ) +
    createCard("25/11", "sex", 
      createGame('gal', '07:00', 'ira') +
      createGame('cat', '10:00', 'sen') +
      createGame('hol', '13:00', 'equ') +
      createGame('ing', '16:00', 'eua')
    ) +
    createCard("26/11", "sab", 
      createGame('tun', '07:00', 'aus') +
      createGame('pol', '10:00', 'ara') +
      createGame('fra', '13:00', 'din') +
      createGame('arg', '16:00', 'mex')
    ) +
    createCard("27/11", "dom", 
      createGame('jap', '07:00', 'cos') +
      createGame('bel', '10:00', 'mar') +
      createGame('cro', '13:00', 'can') +
      createGame('esp', '16:00', 'ale')
    ) +
    createCard("28/11", "seg", 
      createGame('cam', '07:00', 'ser') +
      createGame('cor', '10:00', 'gan') +
      createGame('bra', '13:00', 'sui') +
      createGame('por', '16:00', 'uru')
    ) +
    createCard("29/11", "ter", 
      createGame('equ', '12:00', 'sen') +
      createGame('hol', '12:00', 'cat') +
      createGame('ira', '16:00', 'eua') +
      createGame('gal', '16:00', 'ing')
    ) +
    createCard("30/11", "qua", 
      createGame('tun', '12:00', 'fra') +
      createGame('aus', '12:00', 'din') +
      createGame('pol', '16:00', 'arg') +
      createGame('ara', '16:00', 'mex')
    ) +
    createCard("01/12", "qui", 
      createGame('cro', '12:00', 'bel') +
      createGame('can', '12:00', 'mar') +
      createGame('jap', '16:00', 'esp') +
      createGame('cos', '16:00', 'ale')
    ) +
    createCard("02/12", "sex", 
      createGame('cor', '12:00', 'por') +
      createGame('gan', '12:00', 'uru') +
      createGame('ser', '16:00', 'sui') +
      createGame('cam', '16:00', 'bra')
    )

document.getElementById("yellow").addEventListener("click", () => {
  document.querySelector("body").setAttribute("class", "");
});

document.getElementById("blue").addEventListener("click", () => {
  document.querySelector("body").setAttribute("class", "blue");
});

document.getElementById("green").addEventListener("click", () => {
  document.querySelector("body").setAttribute("class", "green");
});

document.getElementById("orange").addEventListener("click", () => {
  document.querySelector("body").setAttribute("class", "orange");
});

document.getElementById("pink").addEventListener("click", () => {
  document.querySelector("body").setAttribute("class", "pink");
});
