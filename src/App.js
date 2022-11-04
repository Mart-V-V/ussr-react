import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {PostOne} from './components/PostOne';
import {Category} from './components/Category';
import {Categories} from './components/CategoryList';
import {Navbar} from './components/Navbar';
import {PageOne} from './components/PageOne';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="container pt-4">
      <Routes>
        <Route path="/react/" element={<PageOne />}></Route>
        <Route path="/react/page/:id" element={<PageOne />}></Route>
        <Route path="/react/post/:id" element={<PostOne />}></Route>
        <Route path="/react/category" element={<Category />}></Route>
        <Route path="/react/category/:id" element={<Categories />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;