import React from 'react';
import style from './Skills.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title="Skill_01" description="Donec dapibus a magna vel lobortis."/>
                    <Skill title="Skill_02" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                    <Skill title="Skill_03" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                </div>
            </div>
        </div>
    );
}

export default Skills;