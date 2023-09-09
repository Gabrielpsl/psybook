import './App.css';
import Header from './componentes/header';
import Main from './componentes/main';
import Cards from './componentes/main/cards';

import logo from './imagens/logo.svg'

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Main></Main>
      <Cards></Cards>
    </div>
  );
}

export default App;
