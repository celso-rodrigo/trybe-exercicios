const colorBg = document.getElementById('colorBgPref');
const colorTxt = document.getElementById('colorTxtPref');
const fontSize = document.getElementById('fontSizePref');
const lineSpace = document.getElementById('lineSpacePref');
const fontFam = document.getElementById('fontFamPref');
let userPref = localStorage;

colorBg.addEventListener('input', changeBgColor);
colorTxt.addEventListener('input', changeTxtColor);
fontSize.addEventListener('change', changeFontSize);
lineSpace.addEventListener('change', changeLineSpace);
fontFam.addEventListener('change', changefontFam);

function changeBgColor (color){
  document.getElementById('allContent').style.backgroundColor = color.target.value;
}

function changeTxtColor (color){
  const allText = document.querySelectorAll('.text');
  for (let text of allText){
    text.style.color = color.target.value;
  }
}

function changeFontSize (size){
  const allText = document.querySelectorAll('.text');
  let fontRecived = (fontSize.value)*0.1;
  for (let text of allText){
    let fontDefault = fontSizeType(text.tagName);
    text.style.fontSize = `${fontDefault+fontRecived}px`;  // TEMP
  }
}

function fontSizeType(tag){
  let Typeresult = null;

  if (tag === 'H2'){
    Typeresult = 130;
  } else if (tag === 'H3') {
    Typeresult = 30;
  } else if  (tag === 'P') {
    Typeresult = 16;
  } else {
    // FOOTER
    Typeresult = 14;
  }
  return Typeresult;
}

function changeLineSpace (){
  const allText = document.querySelectorAll('.text');
  for (let text of allText){
    text.style.lineHeight = lineSpace.value;
  }
}

function changefontFam (){
  const allText = document.querySelectorAll('.text');
  for (let text of allText){
    text.style.fontFamily = fontFam.value;  // TEMP
  }
}