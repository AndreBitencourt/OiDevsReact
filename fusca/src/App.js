import fusca from './assets/png/fusca-vermelho.png';

import './App.css';

function App(meuCarro) {
  return (
    <div className="App">
      <header className="App-header">        
        <img src={fusca} className="App-logo" alt="logo" />
        <p>
          <h1>O modelo do meu carro é: {meuCarro.modelo}</h1>
          <p>A placa dele é: {meuCarro.placa}</p>
          <small>E a sua cor é: {meuCarro.cor}</small>
        </p>        
      </header>
    </div>
  );
}

export default App;

