import '../contact/Contact.css'


export default function Contact() {
    return (
        <>
        <div className='contactContainer'>
            <section className='contactJumbotron'>
                <h1>Dudas o Preguntas?</h1>
                <p>Escribenos o Visitanos!</p>
            </section>
            <section className='contactContent'>
                <div>
                    <h3>Estamos ubicados en la: <b className='white'>Carrera 129 #64-6 Local 205</b></h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.4689393404019!2d-75.6349014715205!3d6.280060232662333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442b00484617bf%3A0xbe703ff172304a8c!2sMasterburs!5e0!3m2!1ses!2sco!4v1710029253839!5m2!1ses!2sco" width="100%" height="500" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <div>
                        <h2>¿Quieres que te llamemos?</h2>
                        <p>Llena el siguiente formulario</p>
                        <form action="" method="get" class="contactForm">
                            <div class="contactForm">
                                <label for="name">Nombre y Apellido:</label>
                                <input type="text" name="name" id="name" required />
                            </div>
                            <div class="contactForm">
                                <label for="email">Correo Electronico:</label>
                                <input type="email" name="email" id="email" required />
                            </div>
                            <div class="contactForm">
                                <label for="phone">Numero Telefonico</label>
                                <input type="text" name="phone" id="phone" required />
                            </div>
                            <div class="contactForm">
                                <label for="mensaje">Por favor danos mas detalles!</label>
                                <input type="" name="mensaje" id="mensaje" required />
                            </div>
                            <div class="contactForm">
                                <input type="submit" value="Contactame!" />
                            </div>
                        </form>
                            <div class="contactForm">
                                <input type="checkbox" name="checkbox" id="checkbox" className='check' required />
                                <label for="checkbox">*Acepto la politica para el tratamiento de mis datos*</label>
                            </div>
                    </div>
                    <div>
                        <p><b>Nuestros Horarios de Atencion</b></p>
                        <table className='contactTable'>
                                <tr>
                                    <th>Lunes</th>
                                <td>CERRADO</td>
                                </tr>
                                <tr>
                                    <th>Martes</th>
                                <td>11:00am - 11:00pm</td>
                                </tr>
                                <tr>
                                    <th>Miercoles</th>
                                    <td>11:00am - 11:00pm</td>
                                </tr>
                                <tr>
                                    <th>Jueves</th>
                                    <td>11:00am - 11:00pm</td>
                                </tr>
                                <tr>
                                    <th>Viernes</th>
                                    <td>11:00am - 11:00pm</td>
                                </tr>
                                <tr>
                                    <th>Sabado</th>
                                    <td>11:00am - 11:00pm</td>
                                </tr>
                                <tr>
                                    <th>Domingo</th>
                                    <td>11:00am - 11:00pm</td>
                                </tr>
                        </table>
                        <p className='white'><b>**Dias festivos desde las 11:00am - 10:00pm</b></p>
                    </div>
                </div>
            </section>
        </div>
        </>
    )}