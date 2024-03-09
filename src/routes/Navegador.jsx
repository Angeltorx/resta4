import { NavLink } from 'react-router-dom';
import './navegador.css'
import img from '../images/logo.png'



export default function Navegador() {
return (
    <>
    <nav className='navegador'>
        <div className='conteiner'>
            <div className='subContenedor'>
            <img src={img} className='img'></img>
            <div className='logopages'>Restaurante Naguara</div>
            </div>
            <ul className='Navmenu'>
            <li className='NavItem'><NavLink className='NavLink' to="/Home">Home</NavLink></li>
            <li className='NavItem'><NavLink className='NavLink' to="/About">About us</NavLink></li>
            <li className='NavItem'><NavLink className='NavLink' to="/Menu">Menu</NavLink></li>
            <li className='NavItem'><NavLink className='NavLink' to="/Reservas">Reservaciones</NavLink></li>
            <li className='NavItem'><NavLink className='NavLink' to="/Contact">Contactanos</NavLink></li>
            </ul>
        </div>
    </nav>
    </>
)}