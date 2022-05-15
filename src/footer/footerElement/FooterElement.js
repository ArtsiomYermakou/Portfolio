import React from "react";
import style from "./FooterElement.module.scss"

const FooterElement = (props) => {
    return (
        <div className={style.footerElement}>
            <div className={style.icon}>
                <a href={props.link} rel="noopener noreferrer" target={"_blank"}>
                    <img src={props.photo} alt=""/>
                </a>
            </div>
        </div>
    )
}

export default FooterElement;