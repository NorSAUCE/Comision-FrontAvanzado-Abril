//METODO COMPONENT DID UPDATE SE INVOCA DESPUES QUE EL COMPONENTE SE HAYA ACTUALIZADO

import React from "react";

class Ejemplo3 extends React.Component{
   componentDidUpdate(prevProps,prevState){
    if(this.state.count !== prevState.count){
        console.log("componentDidUpdate")
         //Reaccionar a cambios en el estado o las props
    }
   
   
   }
 render(){
    return<div>{this.state.count}</div>
 }
    }
export default Ejemplo3;