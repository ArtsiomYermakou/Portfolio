import React from "react";
import styleContainer from "../common/styles/Container.module.css"
import style from "./Footer.module.scss"
import FooterElement from "./footerElement/FooterElement";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerBlock}`}>
                <h3 className={style.title}>Artem Ermakov</h3>
                <div className={style.foot}>
                    <FooterElement />
                    <FooterElement />
                    <FooterElement />
                    <FooterElement />
                </div>
                <span className={style.copyright}>© 2020 copyright all right reserved.</span>
            </div>
        </div>
    )
}

export default Footer;