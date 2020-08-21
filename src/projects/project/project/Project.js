import React from "react";
import style from "../project/Project.module.css"


const Project = (props) => {
    return (
        <div className={style.project}>
            <h3>{props.title}</h3>
            <a href={props.link}><img className={style.logo} src={props.img} alt={"Ссылка"}/></a>
            <span className={style.description}>
                <span className={style.projectNameText}>Project name:</span> {props.projectName}
            </span>
            <br/>
            <span className={style.description}>
                <span className={style.shortDescriptionText}>Short description:</span> {props.shortDescr}
            </span>
        </div>
    )
}

export default Project;