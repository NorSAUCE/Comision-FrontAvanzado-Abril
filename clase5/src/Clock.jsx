import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state={                        //MONTAMOS EL COMPONENTE
            time : new Date()
        }
        console.log('constructor')
    }


    componentDidMount(){
        console.log('componentDidMount')
        this.timerID = setInterval(()=>this.tick(),1000)
    }
                                                            //ACTUALIZAMOS EL COMPONENTE

    componentDidUpdate(prevProps,prevState){
        console.log('componentDidUpdate')
    }


    componentWillUnmount(){
        console.log('componentWillUnmount')     //DESMONTAMOS EL COMPONENTE
        clearInterval(this.timerID)
    }
    tick() {
        this.setState({
          time: new Date()
        });
      }

render() {
    console.log('Render');
    return (
      <div>
        <h1>Reloj en Tiempo Real</h1>
        <h2>{this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;