import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export const Categories = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://ussr-coins.ru/api/product/read.php")
    const data = await response.json()
    setUsers(data.records)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
             <Link to={`/post/${user.id}`}>
             {user.name}
             </Link>
             <br/>{user.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}