import React from "react";
import style from "./Project.module.scss"

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <a href={props.linkGHPages} rel="noopener noreferrer" target={"_blank"} className={style.viewBtn}>Look</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.shortDescr}</span>
                <a href={props.linkGitHub} rel="noopener noreferrer" target={"_blank"}>
                    {
                        props.linkGitHub
                            ? <span className={style.link}>Click to view the code</span>
                            : <span className={style.link}>Private project</span>
                    }

                </a>
            </div>
        </div>
    )
}

export default Project;