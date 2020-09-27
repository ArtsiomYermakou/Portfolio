import React from 'react';
import style from './Main.module.scss';
import styleContainer from "./../common/styles/Container.module.css"
import avatar from "./../assets/image/mainPhoto.jpg"


const Main = () => {

    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.MainContainer}`}>
                <div className={style.text}>
                    <span className={style.bigText}>Hello, I’m</span>
                    <h1>Artem Ermakov</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={style.photo}>
                    <img className={style.ava} src={avatar} alt="avatar"/>
                </div>
            </div>
        </div>
    );
}

export default Main;