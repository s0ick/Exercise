import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <h2 className={style.title}>Test</h2>
      <div className={style.links}>
        <NavLink to='/page1' className={style.link} activeClassName={style.active}>
          Page 1
        </NavLink>
        <NavLink to='/page2' className={style.link} activeClassName={style.active}>
          Page 2
        </NavLink>
      </div>
    </header>
  )
}

export default Header;