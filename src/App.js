import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Reservation from './pages/Reservation';
import Cart from './components/Cart';
import { useState } from 'react';
import InfoModal from './components/InfoMondal';
import Dashboard from './pages/Dashboard';

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
          <Route path='/dashboard' 
          element={<Dashboard />} />
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
