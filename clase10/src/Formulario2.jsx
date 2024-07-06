import React from "react";
import {useForm} from 'react-hook-form'

const Formulario2 =()=>{
    const{register,handleSubmit,formState:{errors}}=useForm()

    const onSubmit =data=>{
        //Aquí se puede hacer lo que necesite con los datos del formulario
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>
                    Nombre:
                    <input {...register('username',{required:true})}/>
                    {errors.username && <p>Ingrese el nombre del usuario</p>}
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input {...register('password',{required:true})}/>
                    {errors.password && <p>Ingrese una contraseña</p>}
                </label>
            </div>
            <button type="submit">Registrar</button>
        </form>
    )
}

export default Formulario2;
