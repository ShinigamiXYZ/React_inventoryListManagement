// Importation des modules nécessaires
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddInventory from './components/Product/ProductManagement';
import Routing from './components/login/Login';


function App() {// On définit une fonction App qui est le point d'entrée de l'application.
  return (
    <div className="App">
      <header className="App-header">{/*On retourne le composant Routing, qui gère les routes de navigation de l'application. */}
       <Routing/>

      </header>
    </div>
  );
}

export default App;
