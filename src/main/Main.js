import React from 'react';
import style from './Main.module.scss';
import styleContainer from "./../common/styles/Container.module.css"
import avatar from "./../assets/image/mainPhoto.jpg"
import Particles from "react-particles-js";
import Zoom from "react-reveal";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'
import {particlesOpt} from "../configParticles";

const Main = () => {
    return (
        <div id={"main"} className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOpt}/>
            <div className={`${styleContainer.container} ${style.MainContainer}`}>
                <Zoom bottom>
                    <div className={style.text}>
                        <span className={style.bigText}>Hello, I’m</span>
                        <h1>Artem Ermakov</h1>
                        <span>
                            <ReactTypingEffect text="Frontend Developer."/>
                        </span>
                    </div>
                    <div className={style.photo}>
                        <Tilt className={"Tilt"} options={{max: 20}}>
                            <img className={style.ava} src={avatar} alt="avatar"/>
                        </Tilt>
                    </div>
                </Zoom>
            </div>
        </div>
    );
}

export default Main;