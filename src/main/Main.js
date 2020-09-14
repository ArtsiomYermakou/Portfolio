import React from 'react';
import style from './Main.module.scss';
import styleContainer from "./../common/styles/Container.module.css"
import avatar from "./../assets/image/avatar.jpg"


const Main = () => {

    const ava = {
        backgroundImage: `url(${avatar})`,
    };

    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span className={style.bigText}>Hello, I’m</span>
                    <h1>Artem Ermakov</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={style.photo}>
                    <div className={style.ava} style={ava}/>
                </div>
            </div>
        </div>
    );
}

export default Main;