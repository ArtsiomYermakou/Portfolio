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


const Skills = () => {
    return (
        <div id={"skills"} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Zoom bottom>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={reactImg} title="React"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={jsImg} title="JavaScript"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={reduxImg} title="Redux"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={testImg} title="TDD"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={sassImg} title="SASS"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={gitImg} title="GIT"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={apiImg} title="API"/></Tilt>
                        <Tilt className={"Tilt"} options={{max: 20}}><Skill icon={materialUiImg} title="Material-UI"/></Tilt>
                    </Zoom>
                </div>
            </div>
        </div>
    );
}

export default Skills;