import React, {useState} from 'react';

const Formulario1 =()=>{
    const[formData,setFormData] = useState({name:'',email:''})
    const[errors,setErrors] = useState({})

    const handleChange=(event)=>{
        const{name,value}=event.target
        setFormData({...formData,[name]:value})
    }

    const validate =()=>{
        let newErrors={}
        if(!formData.name)newErrors.name ='Name is required'
        if(!formData.email)newErrors.email= 'Email is required'
        return newErrors
    }

    const handleSubmit =(event)=>{
        event.preventDefault()
        const validationErrors= validate()
        if(Object.keys(validationErrors).length>0){
            setErrors(validationErrors)
        }else{
            alert(`Datos del usuario: ${JSON.stringify(formData)}`)
            setErrors({})
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                </label>
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                </label>
            </div>
            {errors.email && <p>{errors.email}</p>}
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Formulario1;