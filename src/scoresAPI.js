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
  }).then(res => res.json()).then(data => data)


}

export const getScores = async () => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Tv1zYAf6WtGRuAGhGsuk/scores`);
  const data = await response.json();
  return data;

}