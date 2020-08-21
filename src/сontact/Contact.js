import React from "react";
import style from "../сontact/Contact.module.css"
import styleContainer from "../common/styles/Container.module.css"

const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.title}>Contact me</h2>
                <div className={style.contact}>
                    <form className={style.form}>
                        <b>Name* </b><input type="text" placeholder="Name?"/><br/>
                        <b>Email* </b><input type="text" placeholder="Your Email?"/><br/>
                        <textarea className={style.textarea} placeholder="Your message?"/><br/>
                        <button onClick={ () => alert("Hello") }>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
