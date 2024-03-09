import { NavLink } from 'react-router-dom';
import './navegador.css'
import img from '../images/logo.png'

export default function Navegador() {
return (
    <>
    <nav className='navegador'>
        <div className='conteiner'>
            <div className='subContenedor'>
                <a href="/home"><img src={img} className='img'/></a>
                <div className='logopages'>
                    <h1>Masterburs</h1>
                </div>
            </div>
            <ul className='Navmenu'>
                <li className='NavItem'><NavLink className='NavLink' to="/Home">Home</NavLink></li>
                <li className='NavItem'><NavLink className='NavLink' to="/About">About us</NavLink></li>
                <li className='NavItem'><NavLink className='NavLink' to="/Menu">Menu</NavLink></li>
                <li className='NavItem'><NavLink className='NavLink' to="/Reservas">Reservaciones</NavLink></li>
                <li className='NavItem'><NavLink className='NavLink' to="/Blog">Blog</NavLink></li>
                <li className='NavItem'><NavLink className='NavLink' to="/Contact">Contactanos</NavLink></li>
            </ul>
        </div>
    </nav>
    </>
)}