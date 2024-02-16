import React, { useState } from 'react';

function FormularioContacto() {
  const initialFormData = {
    name: '',
    lastName: '',
    email: '',
    services: [],
    budget: '',
    phone: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedServices = [...formData.services];
    if (checked) {
      updatedServices.push(value);
    } else {
      updatedServices = updatedServices.filter((service) => service !== value);
    }
    setFormData({ ...formData, services: updatedServices });
    setErrors({ ...errors, services: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} es requerido`;
      }
    });
    if (formData.services.length === 0) {
      newErrors.services = 'Se debe seleccionar al menos un servicio';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
    } else {
      console.log('Formulario enviado:', formData);
      setSubmitted(true);
      setFormData(initialFormData);
    }
  };

  return (
  <div>
     <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && !submitted && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Apellido:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && !submitted && <span>{errors.lastName}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && !submitted && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Servicios requeridos:</label>
        <div>
          <input
            type="checkbox"
            name="services"
            value="desarrollo_web"
            checked={formData.services.includes('desarrollo_web')}
            onChange={handleCheckboxChange}
          />
          <label>Desarrollo Web</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="services"
            value="diseno_web"
            checked={formData.services.includes('diseno_web')}
            onChange={handleCheckboxChange}
          />
          <label>Diseño Web</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="services"
            value="campana_seo"
            checked={formData.services.includes('campana_seo')}
            onChange={handleCheckboxChange}
          />
          <label>Campaña de SEO</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="services"
            value="auditoria_de_seo"
            checked={formData.services.includes('auditoria_de_seo')}
            onChange={handleCheckboxChange}
          />
          <label>Auditoria de Seo</label>
        </div>
        {errors.services && !submitted && <span>{errors.services}</span>}
      </div>
      <div>
        <label>Presupuesto estimado:</label>
        <input type="text" name="budget" value={formData.budget} onChange={handleChange} />
        {errors.budget && !submitted && <span>{errors.budget}</span>}
      </div>
      <div>
        <label>Número de teléfono:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        {errors.phone && !submitted && <span>{errors.phone}</span>}
      </div>
      <button type="submit">Enviar</button>
      {submitted && <div>¡Formulario enviado con éxito!</div>}
    </form></div>
   
  );
}

export default FormularioContacto;