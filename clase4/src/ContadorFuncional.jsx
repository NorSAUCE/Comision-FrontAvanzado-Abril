import React, {useState} from "react";

function Contador(){
    const [contador, setContador] = useState(0);//Inicializo el estado en 0


    const incrementar = ()=>{
        setContador(contador+1)//Actualiza el estado
    }

    const decrementar = ()=>{
        setContador(contador-1)//Actualiza el estado
    }

    return(
        <div>
            <h1>Cuenta: {contador}</h1>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    )

}

export default Contador;