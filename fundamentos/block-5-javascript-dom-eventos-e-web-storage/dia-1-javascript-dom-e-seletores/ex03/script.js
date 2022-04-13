let urg = document.getElementsByClassName('urg');
let naoUrg = document.getElementsByClassName('naoUrg');
let imp = document.getElementsByClassName('imp');
let naoImp = document.getElementsByClassName('naoImp');

for (let cont = 0; cont < urg.length; cont += 1){
  urg[cont].style.backgroundColor = 'rgb(242, 147, 147)';
}

for (let cont = 0; cont < naoUrg.length; cont += 1){
  naoUrg[cont].style.backgroundColor = 'rgb(236, 236, 157)'; 
}

for (let cont = 0; cont < imp.length; cont += 1){
  imp[cont].style.border = '5px dotted red'; 
}

for (let cont = 0; cont < naoImp.length; cont += 1){
  naoImp[cont].style.border = '5px dotted green'; 
}