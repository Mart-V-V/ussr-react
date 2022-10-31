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
             <Link to={`/category/${user.id}`}>
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