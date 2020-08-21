import React from 'react';
import style from './Main.module.css';
import styleContainer from "./../common/styles/Container.module.css"

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hello, I’m</span>
                    <h1>Artem Ermakov</h1>
                    <p>Frontend Developer.</p>
                </div>
                <div className={style.photo}>

                </div>
            </div>
        </div>
    );
}

export default Main;