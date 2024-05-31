import React, {useState} from 'react';
import Actividad1 from './Actividad1';
import './App.css';

function App() {
  const [contenido,setContenido]= useState('')

  return (
    <div>
      <header>
        <h1>Componente Dinamico</h1>
        <div>
          <button onClick={()=>setContenido('saludo')}>Saludo</button>
          <button onClick={()=>setContenido('despedida')}>Despedida</button>
        </div>
        <Actividad1 contenido={contenido}/>
      </header>
    </div>
  )

}

export default App;
