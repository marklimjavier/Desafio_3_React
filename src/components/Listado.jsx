import React from 'react'
import Table from 'react-bootstrap/Table';


const Listado = ({ data, setData }) => {

  const handleEliminar = (id) => {
    const newData = data.filter((usuario) => usuario.id !== id);
    setData(newData);
  };

    const usuarios = data.map((usuario) => 
    <tr className='align-middle' key={usuario.id}>
        <td>{usuario.nombre}</td>
        <td>{usuario.correo}</td>
        <td>{usuario.edad}</td>
        <td>{usuario.cargo}</td>
        <td>{usuario.telefono}</td>
        <button onClick={() => handleEliminar(usuario.id)}>eliminar</button>
    </tr>

    
    )
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>nombre</th>
          <th>correo</th>          
          <th>edad</th>
          <th>cargo</th>
          <th>telefono</th>
          <th>opcion</th>
        </tr>
      </thead>
      <tbody>
        {usuarios}
      </tbody>
    </Table>
  )
}

export default Listado