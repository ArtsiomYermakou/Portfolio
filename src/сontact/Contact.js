import React from "react";
import style from "./Contact.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import Title from "../common/components/title/Title";
import Zoom from "react-reveal";

const Contact = () => {
    return (
        <div id={"contact"} className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title title={"Contact me"}/>
                <Zoom bottom>
                    <div className={style.contact}>
                        <form className={style.form}>
                            <input className={style.name} type="text" placeholder="Name?"/><br/>
                            <input className={style.email} type="text" placeholder="Email?"/><br/>
                            <textarea className={style.textarea} placeholder="Your message?"/><br/>
                            <button className={style.button} type={"submit"} onClick={() => alert("Hello")}>Send Message</button>
                        </form>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default Contact;
