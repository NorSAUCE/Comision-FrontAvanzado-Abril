import React from "react";
import './ComponenteFuncional.css'
//CON FUNCION FLECHA
/*
const ComponenteFuncional =()=>{
    return(
        <div>
            <h3>Hola soy un componente funcional</h3>
        </div>
    )
}*/

//CON PROPS
/*const Saludo = (props)=>{
    return <h1>Hola, {props.name}!</h1>
}
export default Saludo*/

//CON PALABRA FUNCTION
function ComponenteFuncional(){
    return(
        <div>
        <h3 className="titulo1">Hola soy un componente funcional</h3>
    </div>
    )
}


export default ComponenteFuncional;