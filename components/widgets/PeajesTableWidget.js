import React from "react";

const PeajesTable = ({ numPeajes }) => {
  const data = [
    { categoria: "Categoría 1", precio: "$ 75.900" },
    { categoria: "Categoría 2", precio: "$ 115.800" },
    { categoria: "Categoría 3", precio: "$ 109.800" },
    { categoria: "Categoría 4", precio: "$ 163.500" },
    { categoria: "Categoría 5", precio: "$ 274.100" },
    { categoria: "Categoría 6", precio: "$ 366.500" },
  ];

  return (
    <table className="peajes-table">
      <thead>
        <tr>
          <th>Categoría</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.categoria}>
            <td>{item.categoria}</td>
            <td>{item.precio}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total de peajes:</td>
          <td>{numPeajes}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default PeajesTable;