import React from 'react';
import style from './Skills.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactImg from "../assets/image/react.png"
import jsImg from "../assets/image/jsLogo.png"
import reduxImg from "../assets/image/reduxLogo.png"
import testImg from "../assets/image/test.png"
import Zoom from "react-reveal";
import Tilt from 'react-tilt'
import sassImg from '../assets/image/sass.png'
import gitImg from '../assets/image/git.png'
import apiImg from '../assets/image/api.png'
import materialUiImg from '../assets/image/material-ui.png'
import spaImg from '../assets/image/spa.png'
import axiosImg from '../assets/image/axios.png'
import npmImg from '../assets/image/npm.png'
import herokuImg from '../assets/image/heroku.png'
import fluxImg from '../assets/image/flux.png'
import typeScriptImg from '../assets/image/typescript.png'
import htmlImg from '../assets/image/html5.png'
import cssImg from '../assets/image/css.png'


const Skills = () => {
    return (
        <div id={"skills"} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Zoom bottom>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={reactImg} title="React"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={reduxImg} title="Redux"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={jsImg} title="JavaScript"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={typeScriptImg} title="TypeScript"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={cssImg} title="CSS"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={htmlImg} title="HTML"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={testImg} title="TDD"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={sassImg} title="SASS"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={gitImg} title="GIT"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={apiImg} title="RestAPI"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={materialUiImg} title="Material-UI"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={spaImg} title="SPA"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={axiosImg} title="Axios"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={npmImg} title="NPM"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={herokuImg} title="Heroku"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={fluxImg} title="Flux"/></Tilt>
                    </Zoom>
                </div>
            </div>
        </div>
    );
}

export default Skills;