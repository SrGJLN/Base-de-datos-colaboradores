import Table from "react-bootstrap/Table";

function BasicExample({ dataFilter }) {
  const colaboradores = dataFilter.map((colaborador) => (
    <tr key={colaborador.id}>
      <td>{colaborador.id}</td>
      <td>{colaborador.nombre}</td>
      <td>{colaborador.correo}</td>
      <td>{colaborador.edad}</td>
      <td>{colaborador.cargo}</td>
      <td>{colaborador.telefono}</td>
      <td>{colaborador.eliminar}</td>
      <td>
        <i className="fa-solid fa-trash-can"></i>
      </td>
    </tr>
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>id</th>
          <th>nombre</th>
          <th>correo</th>
          <th>edad</th>
          <th>cargo</th>
          <th>telefono</th>
          <th>eliminar</th>
        </tr>
      </thead>
      <tbody>{colaboradores}</tbody>
    </Table>
  );
}

export default BasicExample;
