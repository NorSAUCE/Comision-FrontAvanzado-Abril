//COMPONENT DID MOUNT SE INVOCA INMEDIATAMENTE DESPUES QUE EL COMPONENTE SE HAYA MONTADO
import React from "react";

class Ejemplo1 extends React.Component{
   componentDidMount(){
    console.log("componentDidMount")
    //idealmente para realizar peticiones de datos
   }
 render(){
    return<div>Componente montado</div>
 }
    }
export default Ejemplo1;