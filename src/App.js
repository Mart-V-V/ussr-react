import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About'
import {Setting} from './pages/Setting'
import {ListPost} from './components/ListPost'
import {PostOne} from './components/PostOne'
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
        <Route path="/list" element={<ListPost />}></Route>
        <Route path="/post/:id" element={<PostOne />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;