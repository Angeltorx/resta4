import './App.css';
import { Routes, Route, } from 'react-router-dom';
import About from '../components/about/About'
import Blog from '../components/blog/Blog'
import Contact from '../components/contact/Contact'
import Reservas from '../components/reservaciones/Reservas'
import Navegador from '../routes/Navegador'
import Home from '../pages/Home'
import Menu from '../components/menu/Menu'
import Redes from '../footer/Down'
import Politica from '../components/privacy/Politica'

function App() {
  return (
    <div className="App">
      <Navegador />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservas" element={<Reservas />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Politica" element={<Politica />} />
      </Routes>
      <Redes />
    </div>
  );
}

export default App;
