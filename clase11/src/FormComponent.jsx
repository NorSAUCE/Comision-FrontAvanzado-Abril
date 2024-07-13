import React from 'react';
import useForm from './useForm';

const FormComponent =()=>{
    const{formValues,handleChange,resetForm} = useForm({name:'',email:''})

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log('Formulario enviado',formValues)//envio de datos al backend
        resetForm()
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:
                    <input type='text' name='name' value={formValues.name} onChange={handleChange}></input>
                </label>
            </div>
            <div>
                <label>Email:
                    <input type='email' name='email' value={formValues.email} onChange={handleChange}></input>
                </label>
            </div>
            <button type='submit'>Enviar</button>
        </form>
    )

}

export default FormComponent;