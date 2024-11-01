import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
<<<<<<< HEAD
import {Home} from './pages/Home';
import {About} from './pages/About'
import {Setting} from './pages/Setting'
import {ListPost} from './components/ListPost'
import {Category} from './components/Category'
import {PostOne} from './components/PostOne'
import {Pages} from './components/Pages'
=======
import {PostOne} from './components/PostOne';
import {Category} from './components/Category';
import {Categories} from './components/CategoryList';
>>>>>>> 0ff1bf4d7394ce6f3ecf038c6c1af40d60a8b774
import {Navbar} from './components/Navbar';
import {PageOne} from './components/PageOne';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="container pt-4">
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
        <Route path="/list" element={<ListPost />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/pages" element={<Pages />}></Route>
        <Route path="/post/:id" element={<PostOne />}></Route>
=======
        <Route path="/react/" element={<PageOne />}></Route>
        <Route path="/react/page/:id" element={<PageOne />}></Route>
        <Route path="/react/post/:id" element={<PostOne />}></Route>
        <Route path="/react/category" element={<Category />}></Route>
        <Route path="/react/category/:id" element={<Categories />}></Route>
>>>>>>> 0ff1bf4d7394ce6f3ecf038c6c1af40d60a8b774
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;