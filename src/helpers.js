import {
  getScores,
} from './scoresAPI.js';

function clearScores(parentContainer) {
  parentContainer.querySelectorAll('*').forEach((child) => child.remove());
}

function displayScores(data, parentContainer) {
  let score = '';
  data.forEach((el) => {
    score += `<p>${el.user}: ${el.score}</p>`;
  });

  parentContainer.insertAdjacentHTML('afterbegin', score);
}

export default async function refreshScores() {
  const scoreBoard = document.getElementById('scoreboard');
  clearScores(scoreBoard);
  let scores = await getScores();
  scores = scores.result.sort((a, b) => a.score - b.score);
  scores = scores.slice(0, 10);

  displayScores(scores, scoreBoard);
}