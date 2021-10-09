import {
  postScore,
  getScores
} from "./scoresAPI";

const scoreBoard = document.getElementById('scoreboard');

function clearScores() {
  scoreBoard.querySelectorAll("*").forEach(child => child.remove());
}

document.getElementById('refresh').addEventListener('click', () => {
  clearScores()
})