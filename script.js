"use strict";

// Selecting elements
// const score0El = document.querySelector("#score--0");
// const score1El = document.getElementById("score--1");
// const current0El = document.getElementById("current--0");
// const current1El = document.getElementById("current--1");
// const player0 = document.querySelector(".player--0");
// const player1 = document.querySelector(".player--1");
// const diceEl = document.querySelector(".dice");
// const activePlayer = document.querySelector(".player");
// let random = Math.trunc(Math.random() * 6) + 1;

// score0El.textContent = 0;
// score1El.textContent = 0;
// current0El.textContent = 0;
// current1El.textContent = 0;

// diceEl.classList.add("hidden");

// document.querySelector(".btn--roll").addEventListener("click", function () {
//   random = random = Math.trunc(Math.random() * 6) + 1;
//   document.querySelector(".dice").src = `images/dice-${random}.png`;
//   diceEl.classList.remove("hidden");

//   //   if (activePlayer.classList.contains("player--active") && random === 1) {
//   //     player0.classList.contains("player--active")
//   //       ? (current0El.textContent = 0)
//   //       : (current1El.textContent = 0);
//   //   } else if (player0.classList.contains("player--active")) {
//   //     current0El.textContent = random + Number(current0El.textContent);
//   //   } else {
//   //     current1El.textContent = random + Number(current1El.textContent);
//   //   }

//   if (random === 1 && player0.classList.contains("player--active")) {
//     current0El.textContent = 0;
//     player0.classList.remove("player--active");
//     player1.classList.add("player--active");
//   } else if (random === 1 && player1.classList.contains("player--active")) {
//     current1El.textContent = 0;
//     player0.classList.add("player--active");
//     player1.classList.remove("player--active");
//   } else if (player1.classList.contains("player--active")) {
//     current1El.textContent = random + Number(current1El.textContent);
//   } else {
//     current0El.textContent = random + Number(current0El.textContent);
//   }
// });

// document.querySelector(".btn--hold").addEventListener("click", function () {
//   diceEl.classList.add("hidden");
//   if (player0.classList.contains("player--active")) {
//     player0.classList.remove("player--active");
//     player1.classList.add("player--active");
//     score0El.textContent =
//       Number(current0El.textContent) + Number(score0El.textContent);
//     current0El.textContent = 0;
//   } else {
//     player0.classList.add("player--active");
//     player1.classList.remove("player--active");
//     score1El.textContent =
//       Number(current1El.textContent) + Number(score1El.textContent);
//     current1El.textContent = 0;
//   }
// });

// document.querySelector(".btn--new").addEventListener("click", function () {
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;
//   player0.classList.add("player--active");
//   player1.classList.remove("player--active");
// });

//------------------------------------------------------------------
// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `images/dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 50) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(".player--active");
    } else {
      switchPlayer();
    }
  }
});

document.querySelector(".btn--new").addEventListener("click", function () {
  init();
  document.querySelector(".player--0}").classList.remove(".player--winner");
});
