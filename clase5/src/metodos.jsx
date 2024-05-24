//USANDO TODOS LOS METODOS
import React from "react";

class Metodos extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      console.log('Constructor');
    }
    componentDidMount() {
        //simular una peticion de datos
        setTimeout(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
    //Realizar acciones en respuesta a cambios
    if(prevState.count !==this.state.count){
        console.log('Cambio');
    }}

    componentWillUnmount(){
        console.log('ComponentWillUnmount');
        //Limpiar recursos, cancelar suscripciones
    }
  
    render() {
        console.log('render')
      return(
        <div>
            <p>Contador: {this.state.count}</p>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Incrementar</button>
      </div>  
      )  
    }
  }
 
export default Metodos;