import React from 'react'
import Table from 'react-bootstrap/Table';
const Listado = ({ collaborators }) => {
  return (
  <>
  <Table bordered hover>
    <thead>
    <tr>
      {
        Object.entries(collaborators[0]).map(([key, _]) => {
        return <th key={key} className='text-capitalize' >{key}</th>
        })
      }
  </tr>
    </thead>
    <tbody>
      {collaborators.map(c => (
       <tr key={c.id}>
        <td>{c.id }</td>
        <td>{ c.nombre}</td>
        <td> { c.correo}</td>
        <td> { c.edad}</td>
        <td> { c.cargo}</td>
        <td> { c.telefono}</td>
      </tr>
      )
      )}
      
    </tbody>
    </Table>
  );
}

export default Listado