import React from 'react';
import './Formulario.css';
import logo from './nike.png';

const Formulario = () => {
  return (
    <div className="form-container">
      <h1>Cotizar producto</h1>
      <img src={logo} alt="Logo de la Empresa" className="logo" />
      <h2>Descripción de la Empresa</h2>
      <p>Bienvenido a nuestra empresa. Por favor, complete el formulario a continuación.</p>
      <form className="form">
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" required />
          </div>
          <div className="input-group">
            <label htmlFor="correo">Correo Electrónico:</label>
            <input type="email" id="correo" required />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="cantidad">Cantidad de Productos:</label>
            <input type="number" id="cantidad" required />
          </div>
          <div className="input-group">
            <label htmlFor="entrega">Tipo de Entrega:</label>
            <select id="entrega" required>
              <option value="">Seleccione...</option>
              <option value="normal">Entrega Normal</option>
              <option value="express">Entrega Express</option>
            </select>
          </div>
          
        </div>
        <div className="input-group" >
        <label htmlFor="terms" >Acepto los términos y condiciones</label>
        <input type="checkbox" id="terms" className="checkbox" />
      </div>
        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;

