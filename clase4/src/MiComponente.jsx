//ESTADOS EN COMPONENTES DE CLASE
import React from "react";

class MiComponente extends React.Component{
    constructor(props) {
        super(props);
        this.state = { count: 0 };
      }
    
      incrementar = () => {
        this.setState({ count: this.state.count + 1 });
      };
    
      decrementar = () => {
        this.setState({ count: this.state.count - 1 });
      };
    
      render() {
        return (
          <div>
            <h1>Cuenta: {this.state.count}</h1>
            <button onClick={this.incrementar}>Incrementar</button>
            <button onClick={this.decrementar}>Decrementar</button>
          </div>
        );
      }
    }
export default MiComponente;