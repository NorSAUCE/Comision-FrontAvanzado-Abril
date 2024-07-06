import React from 'react';
import ClickExample from './ContadorClick.jsx';
import ChangeExample from './EjemploChange.jsx';
import SubmitExample from './EjemploSubmit.jsx';
import Formulario1 from './Formulario1.jsx';
import Formulario2 from './Formulario2.jsx';

function App() {
  return (
    <div>
    <ClickExample/>
    
    <ChangeExample/>

    <SubmitExample/>
    <h2>Formulario1 con Eventos y Validaciones</h2>
    <Formulario1/>
    <h2>Formulario2 con React-Hook-Form</h2>
    <Formulario2/>
    </div>
  );
}

export default App;
