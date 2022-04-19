const colorBg = document.getElementById('colorBgPref');
const colorTxt = document.getElementById('colorTxtPref');
const fontSize = document.getElementById('fontSizePref');
const lineSpace = document.getElementById('lineSpacePref');
const fontFam = document.getElementById('fontFamPref');
const allText = document.querySelectorAll('.text');

// LOCAL STORAGE
let userPref = localStorage;

if (userPref.getItem('colorBg') !== 'undefinid'){
  document.getElementById('allContent').style.backgroundColor = JSON.parse(userPref.getItem('colorBg'));
}

if (userPref.getItem('colorTxt') !== 'undefinid'){
  for (let text of allText){
    text.style.color = JSON.parse(userPref.getItem('colorTxt'));
  }
}

if (userPref.getItem('fontSize') !== 'undefinid'){
  for (let text of allText){
    let fontDefault = fontSizeType(text.tagName);
    text.style.fontSize = `${fontDefault + JSON.parse(userPref.getItem('fontSize'))}px`;
  }
}

if (userPref.getItem('lineSpace') !== 'undefinid'){
  for (let text of allText){
    text.style.lineHeight = JSON.parse(userPref.getItem('lineSpace'));
  }
}

if (userPref.getItem('fontFam') !== 'undefinid'){
  for (let text of allText){
    text.style.fontFamily = userPref.getItem('fontFam');
  }
}

// EVENT LISTENERS
colorBg.addEventListener('input', changeBgColor);
colorTxt.addEventListener('input', changeTxtColor);
fontSize.addEventListener('change', changeFontSize);
lineSpace.addEventListener('change', changeLineSpace);
fontFam.addEventListener('change', changefontFam);

// FUNCTIONS
function changeBgColor (color){
  let recivedColor = color.target.value;
  document.getElementById('allContent').style.backgroundColor = recivedColor;

  userPref.setItem('colorBg', JSON.stringify(recivedColor));
}

function changeTxtColor (color){
  for (let text of allText){
    text.style.color = color.target.value;
  }

  userPref.setItem('colorTxt', JSON.stringify(color.target.value));
}

function changeFontSize (size){
  let fontRecived = (fontSize.value)*0.1;
  for (let text of allText){
    let fontDefault = fontSizeType(text.tagName);
    text.style.fontSize = `${fontDefault+fontRecived}px`;
  }

  userPref.setItem('fontSize', JSON.stringify(fontRecived));
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
  for (let text of allText){
    text.style.lineHeight = lineSpace.value;
  }

  userPref.setItem('lineSpace', JSON.stringify(lineSpace.value));
}

function changefontFam (){
  let recivedFam = fontFam.value;
  for (let text of allText){
    text.style.fontFamily = recivedFam;
  }

  userPref.setItem('fontFam', JSON.stringify(recivedFam));
}