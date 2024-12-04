import { useEffect, useState } from "react";

function PopUp({ list, clearArticles }) {
    const productList = list.map(art => (
        <p key={art.id}>{art.nombre}</p>
    ));
    
    const [total, setTotal] = useState(0)


    useEffect(() => {
        let sum = 0
        list.forEach(element => {
            sum = sum + element.precio
        });

        setTotal(sum)
    }, [list])


    return (
        <div className="popUp">
            <div>
                <h1>Carrito</h1>
                {productList}
                <strong>{total}</strong>
            </div>
            <br/>
            <button onClick={() => clearArticles()}>Clear</button>
        </div>
    )
}

export default PopUp;