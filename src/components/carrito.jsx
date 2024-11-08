import React from 'react';

function Carrito({ productosCarrito, eliminarDelCarrito, total }) {
  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      {productosCarrito.length > 0 ? (
        <>
          <ul>
            {productosCarrito.map((item) => (
              <li key={item.id} onClick={() => eliminarDelCarrito(item)}> 
              <i class="bi bi-dash-circle"></i> 
              <span style={{ fontWeight: 'bold' }}>{item.name}</span> (Cant: {item.quantity}) (${item.unitPrice} c/u) 
              </li>
            ))}
          </ul>
          <div className="total">
            <h3>Precio Total: ${total.toFixed(2)}</h3>
          </div>
        </>
      ) : (
        <p>Porfavor, Seleccione uno o más productos para agregar al carrito</p>
      )}
    </div>
  );
}

export default Carrito;
