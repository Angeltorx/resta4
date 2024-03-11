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
                <h3><i class="bi bi-geo-alt"></i> Dirección</h3>
                <p>Cra. 129 #64-6 Local 250</p>
            </div>
            <div className='icons'>
                <p> <i class="bi bi-instagram"></i> Instagran</p>
                <p> <i class="bi bi-facebook"></i> Facebook</p>
                <p> <i class="bi bi-twitter-x"></i> Twitter X</p>
                <p> <i class="bi bi-youtube"></i> Youtube</p>
            </div>
            <div className='textLeft'>
                <p>El uso de este sitio es aceptacion de la <a href="#" onClick={redirigir} >Politica de Privacidad</a>  del mismo </p>
                <p>Todos los derechos reservaods <i class="bi bi-c-circle"></i> 2023</p>
            </div>
        </div>
        </>
    )
}