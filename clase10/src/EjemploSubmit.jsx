import React, {useState} from "react";

const SubmitExample=() => {
    const[name,setName]=useState('')

    const handleChange=(event)=>{
        setName(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        alert(`Bienvenido: ${name}`)
    }

return(
    <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={handleChange} required/>
        <button type="submit">Enviar</button>
    </form>
)

}

export default SubmitExample;