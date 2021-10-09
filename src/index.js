import {
  postScore,
  getScores
} from "./scoresAPI";

const scoreBoard = document.getElementById('scoreboard');

function clearScores() {
  scoreBoard.querySelectorAll("*").forEach(child => child.remove());
}

function displayScores(data, parentContainer) {
  let score = '';
  data.sort(function (a, b) {
    return a.score - b.score;
  });
  data.map((el) => {
    score += `<p>${el['user']}: ${el['score']}</p>`
  })

  // for (let i = 0; i < data.length; i++) {
  //   score += `<p>${data[i]['user']}: ${data[i]['score']}</p>`
  // }
  parentContainer.insertAdjacentHTML('afterbegin', score);
}

document.getElementById('refresh').addEventListener('click', async () => {
  clearScores()
  let scores = await getScores()
  scores = scores['result']
  for (let i = 0; i < scores.length; i++) {
    // console.log(scores[i]['user']);
  }
  displayScores(scores, scoreBoard);
})