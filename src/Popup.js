function popUp({ list, clearArticles }) {
    const productList = list.map(art => (
        <p key={art.id}>{art.nombre}</p>
      ));

    return (
        <div className="popUp">
            <h1>Carrito</h1>
            {productList}
            <button onClick={() => clearArticles()}>Clear</button>
        </div>
    )
}

export default popUp;