//COMPONENT WILL UNMOUNT SE INVOCA JUSTO ANTES DE QUE EL COMPONENTE SE DESMONTE Y DESTRUYA

import React from "react";

class Ejemplo2 extends React.Component{
   componentWillUnmount(){
    console.log("componentWillUnmonunt")
    //Realizar limpieza de recursos
   }
 render(){
    return<div>Componente</div>
 }
    }
export default Ejemplo2;
