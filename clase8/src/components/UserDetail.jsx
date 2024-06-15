import React from "react";
import {useParams} from 'react-router-dom'

const users = [
    { id: 1, name: 'Alice', details: 'Details about Alice' },
    { id: 2, name: 'Bob', details: 'Details about Bob' },
    { id: 3, name: 'Charlie', details: 'Details about Charlie' },
  ];

  function UserDetail(){
    const{id} = useParams()
    const user = users.find(user=>user.id===parseInt(id))

    if(!user){
        return<h2>User Not found</h2>
    }

    return(
        <div>
            <h1>{user.name}</h1>
            <p>{user.details}</p>
        </div>
    )
  }

  export default UserDetail