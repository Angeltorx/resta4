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
                    <h3>Estamos ubicados en la: <b className='white'>CARRERA 129 #64-6 LOCAL 205</b></h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d495.7344999172397!2d-75.63414031498182!3d6.280028465953704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1710024223540!5m2!1ses!2sco" width="100%" height="500" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <div>
                        <h2>¿Como podemos ayudarte?</h2>
                        <p>Por favor llena los siguientes campos para ayudarte</p>
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
                                <input type="text-area" name="mensaje" id="mensaje" required />
                            </div>
                            <div class="contactForm">
                                <input type="submit" value="Contactame!" />
                            </div>
                        </form>
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
                    </div>
                </div>
            </section>
        </div>
        </>
    )}