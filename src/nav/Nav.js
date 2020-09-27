import React from 'react';
import style from './Nav.module.scss';
import {Link} from "react-scroll";

const Nav = () => {
    return (
        <div className={style.nav}>
            <Link activeClass={style.active}
                  to="main"
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}>HOME PAGE
            </Link>
            <Link activeClass={style.active}
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={2000}>SKILLS
            </Link>
            <Link activeClass={style.active}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={2000}>MY WORKS
            </Link>
            <Link activeClass={style.active}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={2000}>CONTACT ME
            </Link>
        </div>
    );
}

export default Nav;