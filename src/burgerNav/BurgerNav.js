import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import {Link} from "react-scroll";
import burgerMenu from "../header/BurgerButton.scss"

const BurgerNav = () => {
    const [toggleBurger, setToggleBurger] = useState(false)

    const toggleBurgerMenu = () => {
        setToggleBurger(!toggleBurger)
        console.log(toggleBurger)
    }


    return (
        <div className={style.burgerNav}>
            <div className={toggleBurger ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <Link activeClass={style.active}
                      to="main"
                      spy={true}
                      smooth={true}
                      offset={1}
                      duration={2000}>HOME PAGE
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
                      duration={3000}>MY WORKS
                </Link>
                <Link activeClass={style.active}
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={2000}>CONTACT ME
                </Link>
            </div>
            <div id="menuToggle" onClick={toggleBurgerMenu} className={style.burgerBtn}>
                <input type="checkbox"/>
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
            </div>
        </div>
    );
}

export default BurgerNav;