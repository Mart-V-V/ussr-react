import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About'
import {Setting} from './pages/Setting'
import {PostList} from './pages/ListPost'
import {OnePost} from './pages/PostOne'
import {Navbar} from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="container pt-4">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/list" element={<PostList />}></Route>
        <Route path="/post/:id" element={<OnePost />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;


// import React from "react";
// import Users from "./myfile.json";

// export default function App() {

//   return (
//     <div className="App">
//       <h1>Users list</h1>
//       <ul>
//       {Users.map(user => (
//         <li key={user.ID}>{user.ID} - {user.post_title}</li>
//       ))}
//       </ul>
//     </div>
//   );
// }