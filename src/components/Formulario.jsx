import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Formulario = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    position: '',
    phone: '',
  });
  const [error, setError] = useState(false);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const validateData = (e) => {
    e.preventDefault();
    setFormData({...formData, [e.target.name]: e.target.value})
    
    if (validarDatos) {
      setError({
        error: true,
        msg: 'Completa todos los campos',
        color: 'warning',
      });
    } else {
      setError({
        error: true,
        msg: 'Cuenta creada exitosamente',
        color: 'success',
      });
      setFormData({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  }
  

  return (
    <>
      <div>
      <Form onSubmit={(e) => validateData(e)} style={{ width: '300px' }}>
        
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
            placeholder="tuemail@ejemplo.com"
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
            placeholder="telefono +56 9 9999 9999 "
            onChange={handleChange}
            value={formData.phone}
          />
        </Form.Group>
      
        <Button type="submit" variant="success" className="w-100 mb-2">
          Agregar
        </Button>
        {error.error && (
        <Alert error={error.error} msg={error.msg} color={error.color} />
      )}
      </Form>
    </div>
    </>
  );
}

export default Formulario;