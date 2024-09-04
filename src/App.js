import './App.css';
//Importa el CSS de Bootstrap
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
// Importa el JS de Bootstrap
import '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Reservation from './pages/Reservation';
import Cart from './components/Cart';
import { useState } from 'react';
import InfoModal from './components/InfoMondal';

function App() {

  const [showCart, setShowCart] = useState(false); // Estado para controlar la visibilidad del Cart

  const [selectedService, setSelectedService] = useState({ name: ''});
  const [showModal, setShowModal] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  }

  const closeModal = () => {
    setSelectedService({name: ''});
    setShowModal(false);
  }


  const toggleCart = () => setShowCart(!showCart);

  return (
    <Router>

      <div className="App">
        <Header toggleCart={toggleCart} showCart={showCart} />
        <Routes>
          <Route path='/' 
          element={<Home />} />
          <Route path='/services' 
          element={<Services openModal={openModal} />} />
          <Route path='/reservation' 
          element={<Reservation />} />
        </Routes>

        {showCart && 
        <Cart toggleCart={toggleCart} 
        />}

        {showModal && 
        <InfoModal service={selectedService} closeModal={closeModal} 
        />}
      </div>
    </Router>
  );
}

export default App;
