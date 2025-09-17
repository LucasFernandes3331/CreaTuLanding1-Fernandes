
function Items({foto, nombre, precio}) {
    return (
        <>
        <div className='container-cards'>
        <div className='card-productos'>
            <img className='img-productos' src={foto} alt={nombre} />
            <h2>{nombre}</h2>
            <p>AR$: {precio.toLocaleString('es-AR')}</p>
            <button>🛒</button>
        </div>
        </div>
        </>
    )
}

export default Items