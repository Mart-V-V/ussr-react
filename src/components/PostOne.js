import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export const PostOne = () => {
  const [users, setUsers] = useState([])
  const postId = useParams().id;
  const apiUrl = 'http://ussr-coins.ru/api/product/read_one.php?id=' + postId;

  const fetchData = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <div>
            <h1 key={users.id}>{users.name}</h1>
            <p>{users.description}</p>
    </div>
  )
}