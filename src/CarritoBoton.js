function AddToCart({id, nombre, descripcion, precio}) {
    return (
        <div className="card">
            <h3>{nombre}</h3>
            <h6>{descripcion}</h6>
            <strong>{precio}</strong>
            <br/>
            <br/>
            <button>Añadir al carrito</button>
        </div>
    )
}

export default AddToCart;