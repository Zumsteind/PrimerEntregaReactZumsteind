import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
                <header>
                
                <img className='ImagenLogo' src="./imagenes/logoMickolStyle.jpg"  alt="Imagen Loco Mickol Style" />
                <h1>LoDeMickol Style</h1>
                    
                    
                    <nav>
                        <ul>
                            <li><h2>Hombre</h2></li>
                            <li><h2>Mujer</h2></li>
                            <li><h2>Nosotros</h2></li>
                      
                        </ul>


                    </nav>

                 <CartWidget/>

                </header>



  )
}

export default NavBar