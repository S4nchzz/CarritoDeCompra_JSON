import { useState, useEffect } from 'react';
import './App.css';
import AddToCart from './CarritoBoton';

function App() {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("articulos.json");
      const data = await response.json();
      setArticulos(data);
    };

    fetchData();
  }, []);

  const [divs, setDivs] = useState([]);

  useEffect(() => {
    const newDivs = articulos.map(art => (
      <AddToCart key={art.id} id={art.id} nombre={art.nombre} descripcion={art.descripcion} precio={art.precio} />
    ));
    setDivs(newDivs);
  }, [articulos]);

  return (
    <div className="Container">
      {
        divs
      }
    </div>
  );
}

export default App;
