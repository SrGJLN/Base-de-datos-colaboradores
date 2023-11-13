import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Listado } from './components/Listado';
import { BaseColaboradores } from './json'
import { Formulario } from './components/Formulario';
import Alert from './Alert';

import './App.css';


function App() {
  const [error, setError] = useState({});
  

  return (
    <>
      <div className="container">  
      <h1>Lista de colaboradores</h1>
      <Formulario />
    
      <Listado colaboradores={BaseColaboradores} />
      </div>
    </>
  );
}

export default App;
