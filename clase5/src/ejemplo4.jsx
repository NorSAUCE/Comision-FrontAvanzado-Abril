//METODO DEL CONSTRUCTOR SE LLAMA CUANDO SE CREA UNA INSTANCIA DEL COMPONENTE PARA INICIALIZAR EL ESTADO DEL COMPONENTE Y ENLAZAR METODOS SI ES NECESARIO.
import React from "react";

class Ejemplo4 extends React.Component {
    constructor(props) {//se llama justo antes de que el componente se monte
      super(props);
      this.state = {//inicializa el estado y enlaza metodos
        count: 0
      };
      console.log('Constructor');
    }
  
    render() {
      return <div>{this.state.count}</div>;
    }
  }
 
export default Ejemplo4;