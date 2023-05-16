import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function User() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        await axios.get("https://randomuser.me/api?results=5")
        .then((response)=>{
            const {results} = response.data;
            setUsers(results);
        });
        
    }

    useEffect(() => {
        fetchUsers();
    },[]);

  return (
    <>
        {
            users.map((each,index)=>(
                <div data-testid="user-id" key={index}>{each.name.first}</div>
            ))
        }        
    </>
  )
}
