function btn1() {
  console.log('Botão 1 cliclado!');
}

function btn2() {
  console.log('Botão 2 cliclado!');
}

function btn3() {
  console.log('Botão 3 cliclado!');
}

function App() {
  return (
    <div>
        <button onClick={btn1}>Button 1</button>
        <button onClick={btn2}>Button 2</button>
        <button onClick={btn3}>Button 3</button>
    </div>
  );
}

export default App;
