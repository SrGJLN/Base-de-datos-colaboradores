import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Listado from "./components/Listado";
import { BaseColaboradores } from "./components/BaseColaboradores";
import Formulario from "./components/Formulario";
import { Alert } from "./components/Alert";
import Buscador from "./components/Buscador";

import './App.css';


function App() {
  const [data, setData] = useState(BaseColaboradores);
  const [dataFilter, setDataFilter] = useState(data);

  const eliminarColaborador = (id) => { 
    const nuevaData = data.filter((colaborador) => colaborador.id !== id);
    setData(nuevaData);
    setDataFilter(nuevaData);
  }

  return (
    <>
      <h1 className="App-title">
        Lista de colaboradores
      </h1>
      <Buscador 
      data={data}
      dataFilter={setDataFilter} />
      <Listado
        data={data}
        dataFilter={dataFilter}
        eliminarColaborador={eliminarColaborador}
      />
      <Formulario 
      data={data}
      setData={setData}
      setDataFilter={setDataFilter}
      dataFilter={dataFilter}
       />
      <Alert />
    </>
  );
}

export default App;