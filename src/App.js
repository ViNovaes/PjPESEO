// IMG

//CSS
import './App.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//import Header from './components/Header/Header';
import Cadastro from './components/Cadastro/Cadastro';
import Home from './components/pgInicial/PgInicial';
import Sobre from './components/Sobre/Sobre'

function App() {
  return (
    <div className="App">
        {/* <Home/> */}
        <Sobre/>
    </div>
  );
}

export default App;
