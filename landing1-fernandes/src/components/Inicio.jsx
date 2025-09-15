import Mother from '../assets/mother-asus.png'
import PlacaVideo from '../assets/placa-video.png'
import Procesador from '../assets/procesador-amd.png'


function Inicio() {
    return (
        <>
        <div className='div-inicio'>
            <h1>PC SHOP</h1>
            <p>$ ¡Las mejores ofertas! $</p>
        </div>
        <div className='images-index'>
            <img src={Mother} className='mother-asus-img' alt="Imágen de una placa madre de la marca Asus, modelo Maximus XII." />
            <img src={PlacaVideo} className='placa-video-img' alt="Imágen del procesador Amd Ryzen 3 3200G en su respectiva caja." />
            <img src={Procesador} className='procesador-img' alt="Imágen de una placa de video de la marca Nitro." />
        </div>
        </>
    )
}

export default Inicio