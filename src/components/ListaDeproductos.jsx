import React from 'react';

function ListaDeproductos({ productos, agregarAlCarrito }) {
  return (
    <div className="productos">
      <h2>Productos Disponibles</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id} onClick={() => agregarAlCarrito(producto)}> 
          <i class="bi bi-dash-circle"></i> <span style={{ fontWeight: 'bold' }}>{producto.name}</span>(${producto.unitPrice} c/u)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeproductos;

