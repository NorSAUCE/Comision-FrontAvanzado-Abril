import React from 'react';
import useFetch from './useFetch.js'

const DataComponent=()=>{
    const url= 'https://jsonplaceholder.typicode.com/posts'
    const {data,loading,error} = useFetch(url)

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return(
        <div>
            <h1>Datos</h1>
            <pre>{JSON.stringify(data,null,2)}</pre>
        </div>
    )
}

export default DataComponent;