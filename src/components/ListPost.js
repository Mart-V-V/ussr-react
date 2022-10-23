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
// import Dates from "../myfile.json";
import { Link } from "react-router-dom";



  // const apiUrl = 'http://ussr-coins.ru/tphpjson/myfile.json';
  fetch('/manifest.json', 
  {method: 'GET',
   mode: 'no-cors',
   headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
   }
 })

  .then((response) => response.json())
  .then((data) => console.log('This is your data', data));


  export const ListPost = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
    return (
      <ul>
        <h2 className='list-head'>Available Public Repositories</h2>
        {repos.map((repo) => {
            <li key={repo.ID} className='list'>
              <span className='repo-text'>{repo.post_title} </span>
              <span className='repo-description'>{repo.post_content}</span>
            </li>
        })}
      </ul>
    );
  };
  // export default ListPost;


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