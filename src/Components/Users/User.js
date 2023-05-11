import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function User() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const data = await axios.get("https://randomuser.me/api?results=5");
        console.log(data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

  return (
    <div>
        {
            users.map((item,index) => {
                return (
                    <div key = {index} data-testid = "user-id">
                        <h2>{item.name}</h2>
                    </div>
                )
            })
        }
    </div>
  )
}
