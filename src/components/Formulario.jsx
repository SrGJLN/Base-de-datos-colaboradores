import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = ({dataFilter, setDataFilter}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });
  const [error, setError] = useState({
    error: false,
    msg: "",
    color: "",
  });

  const validateData = (e) => {
    e.preventDefault();

    if (
      !formData.nombre ||
      !formData.correo ||
      !formData.edad ||
      !formData.cargo ||
      !formData.telefono
    ) {
      setError({
        error: true,
        msg: "Completa todos los campos",
        color: "warning",
      });
    } else {
      setError({
        error: true,
        msg: "Colaborador creado exitosamente",
        color: "success",
      });
      
      setDataFilter([...dataFilter, {...formData, id:new Date().getTime()}]);
      

      setFormData({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.table({name,value});
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  return (
    <>
      <div>
        <Form onSubmit={(e) => validateData(e)} style={{ width: "300px" }}>
          <Form.Group>
            <Form.Control
              className="mb-3"
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              onChange={handleChange}
              value={formData.nombre}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="mb-3"
              type="email"
              name="correo"
              placeholder="Ingresatucorreo@.cl"
              onChange={handleChange}
              value={formData.correo}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="mb-3"
              type="number"
              min={18}
              name="edad"
              placeholder="edad"
              onChange={handleChange}
              value={formData.edad}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="mb-3"
              type="text"
              name="cargo"
              placeholder="Cargo"
              onChange={handleChange}
              value={formData.cargo}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="mb-3"
              type="tel"
              required pattern= "[0-9]{8}"
              name="telefono"
              placeholder="Telefono 35468899"
              onChange={handleChange}
              value={formData.telefono}
            />
          </Form.Group>

          <Button type="submit" variant="success" className="w-100 mb-2">
            Agregar nuevo colaborador
          </Button>
          {error.error && <p style={{ color: error.color }}>{error.msg}</p>}
        </Form>
      </div>
    </>
  );
};

export default Formulario;