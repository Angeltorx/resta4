import '../menu/Menu.css'
import { Card, Button } from 'react-bootstrap'
import React from 'react'
import { productos, jugos } from '../menu/data.js'


export default function Menu() {
  return (
    <>
      <div>
        <div className='menu-contenedor'>
          <h1>Nuestro Menu</h1>
          <h2>Deleitate con tu eleccion!</h2>
          <div className='productos-contenedor'>
            {productos.map((producto, index) => {
              return (
                <Card className='Card'>
                  <Card.Img variant='top' className='imgCard' src={producto.img} />
                  <Card.Body>
                    <Card.Title>
                      {producto.nombre}
                    </Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>
                    <Button className='cardButton' variant="primary">{producto.mas}</Button>
                  </Card.Body>
                </Card>
              )
            })
            }
          </div>
          <h2>Bedidas de la casa</h2>
          <div className='productos-contenedor'>
            {jugos.map((jugo, index) => {
              return (
                <Card className='Card'>
                  <Card.Img variant='top' className='imgCard' src={jugo.img} />
                  <Card.Body>
                    <Card.Title>
                      {jugo.nombre}
                    </Card.Title>
                    <Card.Text>{jugo.descripcion}</Card.Text>
                    <div >
                      <Button className='cardButton' variant="primary">{jugo.mas}</Button>
                    </div>
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