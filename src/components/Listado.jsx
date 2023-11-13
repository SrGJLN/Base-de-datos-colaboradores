import Table from "react-bootstrap/Table";

function Listado({ dataFilter, eliminarColaborador }) {
  const colaboradores = dataFilter.map((colaborador) => (
    <tr key={colaborador.id}>
      <td>{colaborador.id}</td>
      <td>{colaborador.nombre}</td>
      <td>{colaborador.correo}</td>
      <td>{colaborador.edad}</td>
      <td>{colaborador.cargo}</td>
      <td>{colaborador.telefono}</td>
      <td><button onClick={()=> 
        eliminarColaborador(colaborador.id)}>Eliminar</button></td>
    </tr>
  ));

  return (
    <Table striped bordered hover 
    variant="ligth" 
    className='tabla'>
      <thead>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>{colaboradores}</tbody>
    </Table>
  );
}

export default Listado;