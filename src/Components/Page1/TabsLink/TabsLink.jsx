import React from 'react';
import style from './TabsLink.module.css';
import { NavLink } from 'react-router-dom';

const Link = (props) => {
  return (
    <NavLink className={style.tabLink} activeClassName={style.active} to={`/page1/${props.children}`}>
      {props.children}
    </NavLink>
  )
};

const TabsLink = () => {
  return (
    <div className={style.block}>
      <Link>tab-1</Link>
      <Link>tab-2</Link>
      <Link>tab-3</Link>
    </div>
  )
}

export default TabsLink;