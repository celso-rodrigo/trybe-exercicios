const criptsUl = document.getElementById('cripts');
const cryptoAPI = 'https://api.coincap.io/v2/assets';
const rakingSize = 10;

function setRanking(element) {
  const name = element.id.charAt(0).toUpperCase() + element.id.slice(1);
  const price = `${element.priceUsd.split('.')[0]}.${element.priceUsd.split('.')[1].substring(0,2)}`;
  const liMaker = document.createElement('li'); 
  liMaker.innerText = `${name} (${element.symbol}): $${price}`;
  criptsUl.appendChild(liMaker);
}

async function getCriptRank() {
  const info = await fetch(cryptoAPI)
    .then((response) => response.json())
    .then((criptData) => criptData.data.filter((element, index) => {
      if (index < rakingSize) {
        setRanking(element)
      }
    }))
    .catch((err) => alert(`Erro ao carregar aos moedas. \n ${err}`))
}

window.onload = () => getCriptRank();
