import React from 'react';
import style from './Nav.module.css';

const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="">HOME PAGE</a>
            <a href="">SKILLS</a>
            <a href="">MY WORKS</a>
            <a href="">CONTACT ME</a>
        </div>
    );
}

export default Nav;