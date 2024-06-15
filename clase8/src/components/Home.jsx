import React from 'react';
import {Link} from 'react-router-dom'

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];
function Home(){
    return(
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
            {users.map(user=>(
                <li key = {user.id}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Home;