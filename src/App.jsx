import { useState } from 'react';
import './App.css';
import ListaDeproductos from './components/ListaDeproductos';
import Carrito from './components/Carrito';
import groceries from './data/groceries';

function App() {
  const [productosCarrito, setProductosCarrito] = useState([]);

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    setProductosCarrito((prevProductos) => {
      const productoExistente = prevProductos.find((item) => item.id === producto.id);
      
      if (productoExistente) {
        return prevProductos.map((item) =>
          item.id === producto.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevProductos, { ...producto, quantity: 1 }];
      }
    });
  };

  
  const eliminarDelCarrito = (producto) => {
    setProductosCarrito((prevProductos) => {
      const productoExistente = prevProductos.find((item) => item.id === producto.id);
      
      if (productoExistente.quantity > 1) {
        return prevProductos.map((item) =>
          item.id === producto.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevProductos.filter((item) => item.id !== producto.id);
      }
    });
  };

  
  const calcularTotal = () => {
    return productosCarrito.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  };

  return (
    <div className="App">
      <div className="container">
        
        <ListaDeproductos productos={groceries} agregarAlCarrito={agregarAlCarrito} />

        {/* prop al componente Carrito */}
        <Carrito
          productosCarrito={productosCarrito}
          eliminarDelCarrito={eliminarDelCarrito}
          total={calcularTotal()}
        />
      </div>
    </div>
  );
}

export default App;
