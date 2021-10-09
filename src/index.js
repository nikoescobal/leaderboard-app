import {
  postScore
} from "./scoresAPI.js";
import refreshScores from "./helpers.js";

const username = document.getElementById('username')
const score = document.getElementById('score')
const submit = document.getElementById('submit')

window.onload = refreshScores;

document.getElementById('refresh').addEventListener('click', async () => {
  refreshScores();
})

submit.addEventListener('click', async () => {
  await postScore(username.value, score.value)
  refreshScores();
})