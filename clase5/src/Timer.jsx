import React,{useState,useEffect} from 'react'

function Timer(){
    const [seconds,setSeconds]= useState(0)//inicializo el estado en 0 segundo

    //useEffect para montaje y desmontaje
    useEffect(()=>{
        console.log('componente montado')
        const interval = setInterval(()=>{
            setSeconds((prevSeconds)=>prevSeconds+1)
        },1000)

        return()=>{
            console.log('componente desmontado')
            clearInterval(interval)
        }

    },[])

    //useEffect para actualizar el estado
    useEffect(()=>{
        console.log('componente actualizado')
    },[seconds]
    )



return(
    <div>
        <h1>Temporizador</h1>
        <h2>{seconds} segundos</h2>
    </div>
)
}

export default Timer;