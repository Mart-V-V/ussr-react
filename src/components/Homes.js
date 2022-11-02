import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


export const Homes = () => {
  const [users, setUsers] = useState([])
  const postId = '1';
  const apiUrl = 'http://ussr-coins.ru/api/pages/read.php';

  const fetchData = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    setUsers(data.records)

  }

  useEffect(() => {
    fetchData()
  }, [])

  const filtered = users.filter(item => {
    return item.id === postId;
  });

  return (
    <div>
    {filtered.map(item => {
      return (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <div className="Container" dangerouslySetInnerHTML={{__html: item.description}}></div>
        </div>
      );
    })}
    </div>
  )
}