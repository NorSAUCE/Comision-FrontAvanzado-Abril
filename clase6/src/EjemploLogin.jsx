import React from "react";

const MensajeBienvenida = ({usuarioLogueado})=>{
    return(
        <div>
            {usuarioLogueado ? <h1>Bienvenido!</h1> : <h1>Por favor registrese!</h1>}
        </div>
    )
}

export default MensajeBienvenida;