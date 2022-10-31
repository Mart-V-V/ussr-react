import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


export const PageOne = () => {
  const [users, setUsers] = useState([])
  const postId = useParams().id;
  const apiUrl = 'http://ussr-coins.ru/api/pages/read.php';
// console.log(postId);
  const fetchData = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    setUsers(data.records)
    // console.log(data);
  }

  useEffect(() => {
    fetchData()
  }, [])

  const filtered = users.filter(item => {
    return item.id === postId;
  });
  console.log(filtered);
  return (
    <div>
    {filtered.map(item => {
      return (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
      );
    })}
    </div>
  )
}