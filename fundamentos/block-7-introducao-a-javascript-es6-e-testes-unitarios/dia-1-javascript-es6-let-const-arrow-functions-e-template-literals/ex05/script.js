const btn = document.getElementById('btn');
const clickCount = document.getElementById('click-output');
btn.addEventListener('click', () => clickCount.innerText = Number(clickCount.innerText)
+ 1);
