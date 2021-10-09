import {
  getScores,
} from './scoresAPI.js';

const clearScores = (parentContainer) => {
  parentContainer.querySelectorAll('*').forEach((child) => child.remove());
}

const displayScores = (data, parentContainer) => {
  let score = '';
  data.forEach((el) => {
    score += `<p>${el.user}: ${el.score}</p>`;
  });

  parentContainer.insertAdjacentHTML('afterbegin', score);
}

export default async const refreshScores = () => {
  const scoreBoard = document.getElementById('scoreboard');
  clearScores(scoreBoard);
  let scores = await getScores();
  scores = scores.result.sort((a, b) => a.score - b.score);
  scores = scores.slice(0, 10);

  displayScores(scores, scoreBoard);
}