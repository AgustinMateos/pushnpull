import React, { useState } from 'react';

function FormularioPartners() {
  const initialFormData = {
    nombreAgencia: '',
    emailAgencia: '',
    services: [],
    portfolioAgencias: '',
    phoneAgencia: '',
    redSocialAgencias: '',
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
      <form className='formContainerFlex' onSubmit={handleSubmit}>
        <div className='formPrimerContainerInfo'>

          <input placeholder='Nombre de Agencia:' className='formInputs' type="text" name="nombreAgencia" value={formData.name} onChange={handleChange} />
          {errors.nombreAgencia && !submitted && <span>{errors.nombreAgencia}</span>}

          
          <input placeholder='Email:' className='formInputs ' type="emailAgencia" name="emailAgencia" value={formData.email} onChange={handleChange} />
          {errors.emailAgencia && !submitted && <span>{errors.emailAgencia}</span>}


          <input placeholder='Número de teléfono:' className='formInputs' type="number" name="phoneAgencia" value={formData.phoneAgencia} onChange={handleChange} />
          {errors.phoneAgencia && !submitted && <span>{errors.phoneAgencia}</span>}


         

        </div>

        <div className='formSegContainerInfo'>
          <label>a que se dedica?:</label>
          <div className='formServiciosRequeridos'>
            <div className='formServRequeridosFlex formServRequeridosInput'>
              <div className='inputsFlexCheckBox'>
                <input
                  
                  type="checkbox"
                  name="services"
                  value="desarrollo_web"
                  checked={formData.services.includes('desarrollo_web')}
                  onChange={handleCheckboxChange}
                />
                <label className='formLabel '>Desarrollo Web</label></div>

              <div className='inputsFlexCheckBox'> <input
                type="checkbox"
                name="services"
                value="diseno_web"
                checked={formData.services.includes('diseno_web')}
                onChange={handleCheckboxChange}
              />
                <label className='formLabel '>Diseño Web</label></div>

              <div className='inputsFlexCheckBox'>
                <input
                  type="checkbox"
                  name="services"
                  value="campana_seo"
                  checked={formData.services.includes('campana_seo')}
                  onChange={handleCheckboxChange}
                />
                <label className='formLabel '>Campaña de SEO</label>
              </div>
              <div className='inputsFlexCheckBox'><input
                type="checkbox"
                name="services"
                value="aplicaciones_web"
                checked={formData.services.includes('aplicaciones_web')}
                onChange={handleCheckboxChange}
              />
                <label className='formLabel '>Aplicaciones Web</label></div>

            </div>
            <div className='formServRequeridosFlex'>
              <div className='inputsFlexCheckBox'>
                <input
                  type="checkbox"
                  name="services"
                  value="auditoria_de_seo"
                  checked={formData.services.includes('auditoria_de_seo')}
                  onChange={handleCheckboxChange}
                />
                <label className='formLabel '>Auditoria de Seo</label>
              </div>

              <div className='inputsFlexCheckBox'>
                <input
                  type="checkbox"
                  name="services"
                  value="ecommerce"
                  checked={formData.services.includes('ecommerce')}
                  onChange={handleCheckboxChange}
                />
                <label className='formLabel '>Ecommerce</label></div>

              <div className='inputsFlexCheckBox'>
                <input
                  type="checkbox"
                  name="services"
                  value="migracion_a_la_nube"
                  checked={formData.services.includes('migracion_a_la_nube')}
                  onChange={handleCheckboxChange}
                />
                <label className='formLabel '>Migracion a la Nube</label>
              </div>

              

            </div>


          </div>
          {errors.services && !submitted && <span>{errors.services}</span>}
          <div className='formTextoSegundo'>
             <div><input placeholder='Portfolio' className='formInputs' type="text" name="portfolioAgencias" value={formData.portfolioAgencias} onChange={handleChange} />
          {errors.portfolioAgencias && !submitted && <span>{errors.portfolioAgencias}</span>}</div>
          
          <div>

            <textarea placeholder='Mensaje' className='formTextArea' name="servicesOfferedAgencia" value={formData.servicesOfferedAgencia} onChange={handleChange}></textarea>

          </div>
          </div>
       
          <div className='buttonEnviar'><div className='buttonContainers' >  
          <button type="submit">Enviar</button></div></div>


          {submitted && <div>¡Formulario enviado con éxito!</div>}
        </div>





      </form>
      </div>

  );
}

export default FormularioPartners;