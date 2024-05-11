import React, { useState } from 'react';

const SaludoCondicional = () => {
  const [mostrarSaludo, setMostrarSaludo] = useState(false);

  const alternarSaludo = () => {
    setMostrarSaludo(!mostrarSaludo);
  };

  return (
    <div>
      <h1>Renderizado Condicional</h1>
      <button onClick={alternarSaludo}>Mostrar/Ocultar Saludo</button>
      {mostrarSaludo && <h2>Hola, ¡bienvenido/a a nuestra clase!</h2>}
    </div>
  );
};

export default SaludoCondicional;
