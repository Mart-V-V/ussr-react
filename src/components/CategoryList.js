import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export const Categories = () => {
  const [datas, setdatas] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://cms/apics/api-category.php")
    const data = await response.json()
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>
      {datas.length > 0 && (
        <ul>
          {datas.map(data => (
            <li key={data.id}>
             <Link to={`/react/post/${data.id}`}>
             {data.name}
             </Link>
             <br/>{data.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}