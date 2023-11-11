import React, { useState } from "react";
import "./App.css";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

import { BaseColaboradores } from "./components/BaseColaboradores";
import { Alert } from "./components/Alert";

function App() {
  const [data, setData] = useState(BaseColaboradores);
  const [dataFilter, setDataFilter] = useState(data);

  return (
    <>
      <h1 className="App-title">
        <FontAwesomeIcon icon={faUserGroup} />
        Lista de colaboradores
      </h1>
      <Buscador data={data} dataFilter={setDataFilter} />
      <Listado
        data={data}
        setData={setData}
        dataFilter={dataFilter}
        setDataFilter={setDataFilter}
      />
      <Formulario />
      <Alert />
    </>
  );
}

export default App;
