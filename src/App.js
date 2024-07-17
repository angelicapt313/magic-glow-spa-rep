import './App.css';
//Importa el CSS de Bootstrap
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
// Importa el JS de Bootstrap
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  );
}

export default App;
