import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

import { BaseColaboradores } from "./components/BaseColaboradores";
import { Alert } from "./components/Alert";

function App() {
  const [data, setData] = useState(BaseColaboradores);
  const [dataFilter, setDataFilter] = useState(data);

  const eliminarColaborador = (id) =>{
    const nuevaData = data.filter(colaborador=>
      colaborador.id !== id);

      setData(nuevaData);
      setDataFilter(nuevaData);

  }

  

  return (
    <>
      <h1 className="App-title">
        {/* <FontAwesomeIcon icon={faUserGroup} /> */}
        Lista de colaboradores
      </h1>
      <Buscador data={data} 
      dataFilter={setDataFilter}
      
       />
      <Listado
        data={data}
        dataFilter={dataFilter}
        eliminarColaborador={eliminarColaborador}
      />
      <Formulario 
      setDataFilter={setDataFilter}
      setData={setData}
      />
      <Alert />
    </>
  );
}

export default App;