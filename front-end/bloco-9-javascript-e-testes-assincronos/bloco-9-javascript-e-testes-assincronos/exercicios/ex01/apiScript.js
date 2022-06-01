const API_URL = 'https://icanhazdadjoke.com/';
const jokeDiv = document.getElementById('jokeContainer');

const fetchJoke = async () => {
  const response = await fetch(API_URL, {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => jokeDiv.innerText = data.joke)
    .catch(() => jokeDiv.innerText = 'Sem piadas, um erro ocorreu. :c')
}

window.onload = () => fetchJoke();
