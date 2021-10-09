// const postGame = async () => {
//   const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
//     method: 'post',
//     headers: {
//       'Accept': 'application/json, text/plain, */*',
//       'Content-Type': 'application/json'
//     },
//     // mode: 'cors',
//     body: JSON.stringify({
//       name: 'Kill the enemy'
//     })
//   }).then(res => console.log(res.json()))
//   const dataString = res.result.split(' ')[3];

// }

// postGame()

export const postScore = async (name, score) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Tv1zYAf6WtGRuAGhGsuk/scores', {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "user": name,
      "score": score
    })
  }).then(res => res.json()).then(data => console.log(data))


}

export const getScores = async () => {
  await fetch(('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Tv1zYAf6WtGRuAGhGsuk/scores'), {
    method: 'get',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
  }).then(res => res.json()).then(data => console.log(data))
}

getScores();
// postScore();