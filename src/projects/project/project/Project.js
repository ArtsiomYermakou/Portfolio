import React from "react";
import style from "./Project.module.scss"

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <a href={"#"} className={style.viewBtn}>Look</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.shortDescr}</span>
            </div>
        </div>
    )
}

export default Project;