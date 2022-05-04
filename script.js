'use strict';

const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const rollBtn = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const players = document.querySelectorAll('.player');

players.forEach(p => {
  p.querySelector('.score').innerText = 0;
  p.querySelector('.current-score').innerText = 0;
});

rollBtn.addEventListener('click', () => {
  const randomRoll = Math.floor(Math.random() * 6 + 1);
  dice.setAttribute('src', `dice-${randomRoll}.png`);
  const activePlayer = document.querySelector('.player--active');
  const activePlayerCurrentScore = parseFloat(
    activePlayer.querySelector('.current-score').innerText
  );
  if (randomRoll === 1) {
    activePlayer.querySelector('.current-score').innerText = 0;
    players.forEach(p => {
      p.classList.toggle('player--active');
    });

    return;
  }

  activePlayer.querySelector('.current-score').innerText =
    randomRoll + activePlayerCurrentScore;
});

holdBtn.addEventListener('click', () => {
  const activePlayer = document.querySelector('.player--active');

  const activePlayerScore = parseFloat(
    activePlayer.querySelector('.score').innerText
  );
  const activePlayerCurrentScore = parseFloat(
    activePlayer.querySelector('.current-score').innerText
  );
  activePlayer.querySelector('.score').innerText =
    activePlayerCurrentScore + activePlayerScore;
  activePlayer.querySelector('.current-score').innerText = 0;

  players.forEach(p => {
    p.classList.toggle('player--active');
  });
});
