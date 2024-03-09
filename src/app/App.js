import './App.css';

import { Routes, Route, } from 'react-router-dom';
import About from '../components/about/About'
import Blog from '../components/blog/Blog'
import Contact from '../components/contact/Contact'
import Reservas from '../components/reservaciones/Reservas'
import Navegador from '../routes/Navegador'
import Home from '../pages/Home'
import Menu from '../components/menu/Menu'



function App() {
  return (
    <div className="App">
      <Navegador/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Reservas" element={<Reservas />} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
