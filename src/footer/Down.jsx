import '../footer/down.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    let navigate = useNavigate();
    function redirigir() {
        navigate('/Politica');
}
    return (
        <>
        <div className='footerDown'>
            <div>
                <h4><i class="bi bi-geo-alt"></i> Dirección</h4>
                <p>Cra. 129 #64-6 Local 250</p>
                <p><i class="bi bi-phone"></i> 311-301-8945</p>
            </div>
            <div className='icons'>
                <h2><i class="bi bi-instagram"></i></h2>
                <h2><i class="bi bi-facebook"></i></h2>
                <h2><i class="bi bi-twitter-x"></i></h2>
                <h2><i class="bi bi-youtube"></i></h2>
            </div>
            <div className='textLeft1'>
                <p>El uso de este sitio es aceptacion de la <a href="#" onClick={redirigir} >Politica de Privacidad</a>  del mismo </p>
                <p>Todos los derechos reservaods <i class="bi bi-c-circle"></i> 2023</p>
            </div>
        </div>
        </>
    )
}