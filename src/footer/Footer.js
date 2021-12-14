import React from "react";
import styleContainer from "../common/styles/Container.module.css"
import style from "./Footer.module.scss"
import FooterElement from "./footerElement/FooterElement";
import Zoom from "react-reveal";
import linkedIn from "../assets/image/linkedIn.png"
import github from "../assets/image/github.png"
import telegram from "../assets/image/telegram.png"
import facebook from "../assets/image/facebook.png"

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerBlock}`}>
                <h3 className={style.title}>Artem Ermakov</h3>
                <div className={style.foot}>
                    <Zoom bottom>
                        <FooterElement photo={linkedIn} link={"https://www.linkedin.com/in/artem-ermakov-45917a1b9/"}/>
                        <FooterElement photo={facebook} link={"https://www.facebook.com/profile.php?id=100003737442470"}/>
                        <FooterElement photo={telegram} link={"https://t.me/ermakoovv"}/>
                        <FooterElement photo={github} link={"https://github.com/ArtsiomYermakou"}/>
                    </Zoom>
                </div>
                <span className={style.copyright}>© 2020 copyright all right reserved.</span>
            </div>
        </div>
    )
}

export default Footer;