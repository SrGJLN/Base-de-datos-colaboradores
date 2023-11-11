import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    position: "",
    phone: "",
  });
  const [error, setError] = useState({
    error: false,
    msg: "",
    color: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateData = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.age ||
      !formData.position ||
      !formData.phone
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
      setFormData({
        name: "",
        email: "",
        age: "",
        position: "",
        phone: "",
      });
    }
  };

  return (
    <>
      <div>
        <Form onSubmit={(e) => validateData(e)} style={{ width: "300px" }}>
          <Form.Group>
            <Form.Control
              className="mb-3"
              type="text"
              name="name"
              placeholder="Nombre completo"
              onChange={handleChange}
              value={formData.name}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="mb-3"
              type="email"
              name="email"
              placeholder="Ingresatucorreo@.cl"
              onChange={handleChange}
              value={formData.email}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="mb-3"
              type="number"
              min={18}
              name="age"
              placeholder="edad"
              onChange={handleChange}
              value={formData.age}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="mb-3"
              type="text"
              name="position"
              placeholder="Cargo"
              onChange={handleChange}
              value={formData.position}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              className="mb-3"
              type="number"
              name="phone"
              placeholder="telefono +56 9 123456789 "
              onChange={handleChange}
              value={formData.phone}
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
