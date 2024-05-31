/*CREA UN COMPONENTE QUE USE UNA PROP LLAMADA CONTENIDO PARA DETERMINAR QUE CONTENIDO MOSTRAR.
DEPENDIENDO DEL VALOR (SALUDO O DESPEDIDA), EL COMPONENTE RENDERIZARA UN MENSAJE DE
HOLA BIENVENIDO A NUESTRA APLICACION O ADIOS GRACIAS POR VISITAR NUESTRA APLICACION.*/
import React from "react";

const Actividad1 = ({contenido})=>{
  if(contenido === 'saludo'){
    return <p>Hola, bienvenido a nuestra aplicacion!</p>
  }else if(contenido === 'despedida'){
    return <p>Adios, gracias por visitar nuestra aplicacion!</p>
  }else{
    return <p>Seleccione un tipo de contenido</p>
  }
}
export default Actividad1