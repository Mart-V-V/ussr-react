import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
<<<<<<< HEAD
      <div className="navbar-brand">
          <a href="/" className="logo_link">Note App</a>
      </div>
      <ul className="navbar-nav">
=======
        <div className="navbar-brand">
            <a href="/react/" className="logo_link">Ussr React</a>
        </div>
        <ul className="navbar-nav">
>>>>>>> 0ff1bf4d7394ce6f3ecf038c6c1af40d60a8b774
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/react/">Главная</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/react/page/2">Информация</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/setting">Настройки</NavLink>
<<<<<<< HEAD
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/list">Список постов</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/category">Категории</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/pages">Страницы</NavLink>
=======
        </li> */}
        {/* <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/list">Список</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/react/category">Категории</NavLink>
>>>>>>> 0ff1bf4d7394ce6f3ecf038c6c1af40d60a8b774
        </li>
      </ul>
    </nav>
)