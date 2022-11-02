import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            <a href="/react/" className="logo_link">Ussr React</a>
        </div>
        <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/react/">Главная</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/react/page/2">Информация</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/setting">Настройки</NavLink>
        </li> */}
        {/* <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/list">Список</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/react/category">Категории</NavLink>
        </li>
      </ul>
    </nav>
)