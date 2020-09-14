import React from "react";
import style from "./Title.module.scss"

const Title = (props) => {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
        </div>

    )
}

export default Title;