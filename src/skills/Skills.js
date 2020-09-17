import React from 'react';
import style from './Skills.module.scss';
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Skill title="React" description="Donec dapibus a magna vel lobortis."/>
                    <Skill title="JavaScript" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                    <Skill title="Redux" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                    <Skill title="TDD" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
                </div>
            </div>
        </div>
    );
}

export default Skills;