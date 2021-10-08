const fetchGame = async (data) => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    // mode: 'cors',
    body: JSON.stringify({
      name: 'Kill the enemy'
    })
  }).then(res => res.json())
  const dataString = res.result.split(' ')[3];


  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${dataString}/scores`, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    // mode: 'cors',
    body: JSON.stringify(data)
  }).then(res => res.json()).then(dat => console.log(dat))

}

fetchGame(data)