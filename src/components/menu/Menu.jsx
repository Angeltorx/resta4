import '../menu/Menu.css'
import { Card, Button } from 'react-bootstrap'
import React from 'react'
import { productos, jugos } from '../menu/data.js'


export default function Menu() {
  return (
    <>
      <div>
        <div className='menu-contenedor'>
          <h1>Deleitate con tu eleccion!</h1>
          <div className='productos-contenedor'>
            {productos.map((producto, index) => {
              return (
                <Card className='Card'>
                  <Card.Img variant='top' className='imgCard' src={producto.img} />
                  <Card.Body>
                    <Card.Title>
                      {producto.descripcion}
                    </Card.Title>
                    <Button className='button' variant="primary">{producto.precio}</Button>
                  </Card.Body>
                </Card>
              )
            })
            }
          </div>
          <h1>Bedidas de la casa</h1>
          <div className='productos-contenedor'>
            {jugos.map((jugo, index) => {
              return (
                <Card className='Card'>
                  <Card.Img variant='top' className='imgCard' src={jugo.img} />
                  <Card.Body>
                    <Card.Title>
                      {jugo.descripcion}
                    </Card.Title>
                    <Button className='button' variant="primary">{jugo.precio}</Button>
                  </Card.Body>
                </Card>

              )
            })
            }
          </div>
        </div>
      </div>
    </>
  )
}

//"En Masterburs, cada bocado cuenta una historia; descubre el prólogo de tu experiencia gourmet aquí."