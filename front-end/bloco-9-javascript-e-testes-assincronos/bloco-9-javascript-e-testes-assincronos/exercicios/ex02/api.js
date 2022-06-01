const criptsUl = document.getElementById('cripts');
const cryptoEndP = 'https://api.coincap.io/v2/assets';
const usdEndP = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';
const rakingSize = 10;
let brlValue = 0;

function getBrlPrice() {
  const promesse = fetch(usdEndP)
  promesse
    .then((response) => response.json())
    .then((data) => data.usd['brl'])
    .then((brl) => brlValue = brl)
    .catch((err) => alert(`Erro ao converter Dolar para BRL. \n ${err}`))
}

function setRanking(element) {
  const name = element.id.charAt(0).toUpperCase() + element.id.slice(1);
  const brlPrice = (brlValue * Number(element.priceUsd)).toFixed(2)
  const liMaker = document.createElement('li'); 
  liMaker.innerText = `${name} (${element.symbol}): R$${brlPrice}`;
  criptsUl.appendChild(liMaker);
}

function getCriptRank() {
  const info = fetch(cryptoEndP)
    .then((response) => response.json())
    .then((criptData) => criptData.data.filter((element, index) => {
      if (index < rakingSize) {
        setRanking(element)
      }
    }))
    .catch((err) => alert(`Erro ao carregar aos moedas. \n ${err}`))
}

window.onload = () => getCriptRank(), getBrlPrice();
