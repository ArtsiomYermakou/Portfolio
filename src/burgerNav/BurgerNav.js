import React, {useState} from 'react';
import style from './BurgerNav.module.scss';
import {Link} from "react-scroll";
import menu from "./../assets/image/menu.png"

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
                      offset={-100}
                      duration={2000}>CONTACT ME
                </Link>
            </div>
            <div onClick={toggleBurgerMenu} className={style.burgerBtn}>
                <span></span>
            </div>
        </div>
    );
}

export default BurgerNav;