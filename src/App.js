import './App.css';
//Importa el CSS de Bootstrap
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
// Importa el JS de Bootstrap
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
