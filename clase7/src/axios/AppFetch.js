import React, {useState,useEffect} from 'react';

function App() {
  const [data,setData] =useState(null) //Estado para almacenar los datos obtenidos
  const [loading,setLoading] = useState(true)//Estado para manejar el indicador de carga
  const [error,setError] = useState(null)//Estado para manejar errores

  useEffect(()=>{
    //hacer la solicitud a la api
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
      if(!response.ok){
        throw new Error('La respuesta no es Ok')
      }
      return response.json()
    })
    .then(data=>{
      setData(data)//Guardar los datos en el estado
      setLoading(false)//Cambiar el estado de carga
    })
    .catch(error=>{
      setError(error)//Manejar errores
      setLoading(false)//cambiar el estado de carga
    })

  },[])//El segundo argumento [] asegura que el efecto se ejecute una vez al montar el componente

  if(loading)return <p>Loading...</p>//Mostrar el indicador de carga
  if(error) return <p>Error en el fetch al obtener la data: {error.message}</p>//mostrar el mensaje de error

  return(
    <div>
      <h1>API Data</h1>
      <ul>
        {data.map(post=>(
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )

}

export default App;
