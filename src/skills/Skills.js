import React from 'react';
import style from './Skills.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactImg from "../assets/image/react.png"
import jsImg from "../assets/image/jsLogo.png"
import reduxImg from "../assets/image/reduxLogo.png"
import testImg from "../assets/image/test.png"


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Skill icon={reactImg} title="React" description="Donec dapibus a magna vel lobortis."/>
                    <Skill icon={jsImg} title="JavaScript" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                    <Skill icon={reduxImg} title="Redux" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                    <Skill icon={testImg} title="TDD" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                </div>
            </div>
        </div>
    );
}

export default Skills;