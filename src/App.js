import { useState, useEffect } from 'react';
import './App.css';
import AddToCart from './CarritoBoton';
import Popup from './Popup';
import basket from './basket.png'

function App() {
  const [articulos, setArticulos] = useState([]);
  const [divs, setDivs] = useState([]);
  const [showCarrito, setShowCarrito] = useState(false);
  const [articlesInCart, setArticlesInCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("articulos.json");
      const data = await response.json();
      setArticulos(data);
    };  

    fetchData();
  }, []);

  const addArticlesToCart = (id) => {
    const articleToAdd = articulos.find(art => art.id === id);
    if (articleToAdd) {
      setArticlesInCart(prevArticles => [...prevArticles, articleToAdd]);
    }
  }

  const clearArticles = () => {
    setArticlesInCart([])
  }

  useEffect(() => {
    const newDivs = articulos.map(art => (
      <AddToCart key={art.id} id={art.id} nombre={art.nombre} descripcion={art.descripcion} precio={art.precio} addFun={addArticlesToCart}/>
    ));
    setDivs(newDivs);
  }, [articulos]);

  return (
    <div>
      <button className='buttonAddCart' onClick={() => setShowCarrito(!showCarrito)}>
        <img src={basket} alt='fotoAñadirCarrito' width={60}/>
      </button>
      
      {showCarrito && <Popup className="popUp" list={articlesInCart} clearArticles={clearArticles}/>}

      <div className={showCarrito ? "Container-semihide" : "Container-show"}>
        {
          divs
        }
      </div>
    </div>
  );
}

export default App;
