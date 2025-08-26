import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
    return (
        <>
            <div class="logo-img">
                <p>LOGO (img)</p>
            </div>
            <div class="div-navbar">
                <ul class="navbarlist">
                    <li>Inicio</li>
                    <li>Productos</li>
                </ul>
            </div>
            <CartWidget />
        </>
    )
}

export default NavBar