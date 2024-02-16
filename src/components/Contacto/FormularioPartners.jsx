import React, { useState } from 'react';

function FormularioPartners() {
  const initialFormData = {
    agencyName: '',
    email: '',
    phone: '',
    servicesOffered: '',
    portfolio: '',
    nationality: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} es requerido`;
      }
    });
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
          <label>Nombre de la agencia:</label>
          <input type="text" name="agencyName" value={formData.agencyName} onChange={handleChange} />
          {errors.agencyName && !submitted && <span>{errors.agencyName}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && !submitted && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Número de teléfono:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          {errors.phone && !submitted && <span>{errors.phone}</span>}
        </div>
        <div>
          <label>Servicios ofrecidos:</label>
          <textarea name="servicesOffered" value={formData.servicesOffered} onChange={handleChange}></textarea>
          {errors.servicesOffered && !submitted && <span>{errors.servicesOffered}</span>}
        </div>
        <div>
          <label>Portfolio:</label>
          <input type="text" name="portfolio" value={formData.portfolio} onChange={handleChange} />
          {errors.portfolio && !submitted && <span>{errors.portfolio}</span>}
        </div>
        <div>
          <label>Nacionalidad:</label>
          <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
          {errors.nationality && !submitted && <span>{errors.nationality}</span>}
        </div>
        <button type="submit">Enviar</button>
        {submitted && <div>¡Formulario enviado con éxito!</div>}
      </form>
    </div>
  );
}

export default FormularioPartners;
