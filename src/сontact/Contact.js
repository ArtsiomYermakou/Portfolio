import React, {useState} from "react";
import style from "./Contact.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import Title from "../common/components/title/Title";
import Zoom from "react-reveal";
import axios from "axios"
import Swal from 'sweetalert2'
import {useFormik} from "formik";
import CircularProgress from "@material-ui/core/CircularProgress";




const Contact = () => {

    const [preloader, setPreloader] = useState(null)

    const [buttonSend, setButtonSend] = useState(true)

    const doneAlert = () => {
        Swal.fire(
            `Спасибо, ${formik.values.name}!
            Я свяжусь с вами в ближайшее свободное время.`
        )
    }

    const initialValues = {
        name: "",
        contacts: "",
        message: "",
    }

    const onSubmit = values => {
        setPreloader(<CircularProgress color={"secondary"} />)
        axios.post("https://smtp-nodejs-serv.herokuapp.com/sendMessage", {
            name: formik.values.name,
            contacts: formik.values.contacts,
            message: formik.values.message
        })
            .then(() => {
                doneAlert();
                setPreloader(null)
                formik.resetForm();
            })
        values.preventDefault()
    }

    const validate = values => {
        let errors = {}
        if (!values.name) {
            errors.name = "Поле не может быть пустым."
        }
        if (!values.contacts) {
            errors.contacts = "Поле не может быть пустым."
        }
        if (!values.message) {
            errors.message = "Поле не может быть пустым."
        }
        if(values.name && values.contacts && values.message){
            setButtonSend(false)
        }
        if(!values.name || !values.contacts || !values.message){
            setButtonSend(true)
        }
        return errors;
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return (
        <div id={"contact"} className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title title={"Contact me"}/>
                <Zoom bottom>
                    <div className={style.contact}>
                        <form onSubmit={onSubmit} id={"contactForm"} className={style.form}>
                            {preloader}
                            <input value={formik.values.name} onChange={formik.handleChange} name={"name"} onBlur={formik.handleBlur} className={style.name} type="text" placeholder="Name?"/><br/>
                            {formik.touched.name && formik.errors.name ? <div className={style.error}>{formik.errors.name}</div> : null}
                            <input value={formik.values.contacts} onChange={formik.handleChange} name={"contacts"} onBlur={formik.handleBlur} className={style.email} type="email" placeholder="Email"/><br/>
                            {formik.touched.contacts && formik.errors.contacts ? <div className={style.error}>{formik.errors.contacts}</div> : null}
                            <textarea value={formik.values.message} onChange={formik.handleChange} name={"message"} onBlur={formik.handleBlur} className={style.textarea} placeholder="Your message?"/><br/>
                            {formik.touched.message && formik.errors.message ? <div className={style.error}>{formik.errors.message}</div> : null}
                            <button disabled={buttonSend} className={style.button} type="submit">Send Message</button>
                        </form>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}


export default Contact;
