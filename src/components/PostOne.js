import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


export const PostOne = () => {
  const [users, setUsers] = useState([])
  const postId = useParams().id;


  const fetchData = async () => {
    const response = await fetch('http://ussr-coins.ru/api/product/read_one.php?id=${postId}')
    const data = await response.json()
    setUsers(data)
    console.log(data);
  }

  useEffect(() => {
    fetchData()
  }, [])

  const filtered = users(item => {
    return item.ID === postId;
  });

// console.log(postId);

  return (
    <div>
    {filtered.map(item => {
      return (
        <div key={item.Id}>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
      );
    })}
    </div>
  )
}


// import React from "react";
// import { useParams } from 'react-router-dom';
// import Dates from "../myfile.json";

// export const PostOne = () => {

  // const postId = useParams().id;

  // const filtered = Dates.filter(item => {
  //   return item.ID === postId;
  // });

//   return (
      // <div>
      // {filtered.map(item => {
      //   return (
      //     <div key={item.ID}>
      //       <h1>{item.post_title}</h1>
      //       <p>{item.post_content}</p>
      //     </div>
      //   );
      // })}
      // </div>
//   );
// }