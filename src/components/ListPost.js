// import React from "react";
// import Dates from "../myfile.json";
// import { Link } from "react-router-dom";


// export const ListPost = () => {
//   return (
//       <ul>
//       {Dates?.map(date => (
//         <li key={date.ID}>
//             <Link to={`/post/${date.ID}`}>
//                 {date.post_title}
//             </Link>
//             {date.post_content}
//         </li>
//       ))}
//       </ul>
//   );
// }

// import React from 'react';

// class myComponent extends React.Component {
//   componentDidMount() {
//     const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log('This is your data', data));
//   }
//   render() {
//     return <h1>my Component has Mounted, Check the browser 'console' </h1>;
//   }
// }
// export default myComponent;



import React from "react";
import Dates from "../myfile.json";
import { Link } from "react-router-dom";



  const apiUrl = 'http://ussr-coins.ru/tphpjson/myfile.json';
  fetch(apiUrl, { mode: 'no-cors',     method: 'POST',
  headers: { 'Content-Type': 'application/json' }, })

  .then((response) => response.json())
  .then((data) => console.log('This is your data', data));


export const ListPost = () => {
  return (
      <ul>
      {Dates?.map(date => (
        <li key={date.ID}>
            <Link to={`/post/${date.ID}`}>
                {date.post_title}
            </Link>
            {date.post_content}
        </li>
      ))}
      </ul>
  );
}