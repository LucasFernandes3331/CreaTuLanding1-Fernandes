import { Link, Outlet } from 'react-router-dom'
import Logo from '../assets/logo-pc.svg'

function NavBar() {
    return (
        <>
        <header>
            <div>
                <Link to={'/'}><img className='logo-pc' src={Logo} alt="Imágen en forma de logo de una computadora y una placa de video que dice PC Shop"/></Link>
            </div>
            <nav>
                <ul className='list-header'>
                    <li className='elemento-li'>
                        <Link to={'/'}>Inicio</Link>
                    </li>
                    <li className='elemento-li'>
                        <Link to={'/productos'}>Productos</Link>
                    </li>
                    <li className='elemento-li'>
                        <Link to={'/contacto'}>Contacto</Link>
                    </li>
                    <li className='elemento-li'>
                        <Link>🛒</Link> {/*item provisorio, no funciona.*/}
                    </li>
                </ul>
            </nav>
        </header>
            <Outlet/>
        </>
    )
}

export default NavBar