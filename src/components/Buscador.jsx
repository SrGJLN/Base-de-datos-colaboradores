import React from "react";

function Buscador({ data, dataFilter }) {
  function filtro(e) {
    const buscarColaborador = e.target.value.toLowerCase();

    const resultados = data.filter(
      (colaborador) =>
        colaborador.nombre.toLowerCase().includes(buscarColaborador) ||
        colaborador.correo.toLowerCase().includes(buscarColaborador) ||
        colaborador.edad.toString().includes(buscarColaborador) ||
        colaborador.cargo.toLowerCase().includes(buscarColaborador) ||
        colaborador.telefono.includes(buscarColaborador)
    );
    dataFilter(resultados);
  }

  return (
    <div className="buscador col-12 col-md-6">
      <input
        type="text"
        name="Buscador"
        id="buscador"
        placeholder="Busca un colaborador"
        onChange={filtro}
      />
    </div>
  );
}

export default Buscador;
