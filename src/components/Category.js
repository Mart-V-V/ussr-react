<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

export const Category = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        fetch('http://cms/apics/api-category.php')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    return (
        <div>
        <h1>Category List</h1>
        {selectedPost ? (
            <div>
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.content}</p>
            <button onClick={() => setSelectedPost(null)}>Back to List</button>
            </div>
        ) : (
            <ul>
            {posts.map(post => (
            <li key={post.ID} onClick={() => handlePostClick(post)}>
                {post.ID}: {post.title}
                </li>
            ))}
            </ul>
        )}
        </div>
    );
};
=======
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export const Category = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://ussr-coins.ru/api/category/read.php")
    const data = await response.json()
    setUsers(data.records)
    // console.log(data);
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
             <Link to={`/react/category/${user.id}`}>
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













// let resp;

// fetch('http://ussr-coins.ru/api/category/read.php')  
//   .then(  
//     function(response) {  
//       if (response.status !== 200) {  
//         console.log('Looks like there was a problem. Status Code: ' +  
//           response.status);  
//         return;  
//       }

//       response.json().then(function(data) {  
//         // console.log(data.records)
//         resp = data.records;
//         // console.log(resp);
//       });
//     }  
//   )  
//   .catch(function(err) {  
//     console.log('Fetch Error :-S', err);  

//   });


//   export const Category = () => {
//     return (
//         <ul>
//         {resp?.map(date => (
//           <li key={date.id}>
//               <Link to={`/category/${date.id}`}>
//                   {date.name}
//               </Link><br/>
//               {date.description}
//           </li>
//         ))}
//         </ul>
//     );
//   }
>>>>>>> 0ff1bf4d7394ce6f3ecf038c6c1af40d60a8b774
