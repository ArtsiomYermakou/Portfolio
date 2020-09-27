import React from "react";
import style from "./Projects.module.scss"
import styleContainer from "../../common/styles/Container.module.css"
import Project from "./project/Project";
import Title from "../../common/components/title/Title";
import socialNetwork from "./../../assets/image/sn3.jpg"
import calculatorImg from "./../../assets/image/calculator2.png"
import todoImg from "./../../assets/image/todo.png"
import Zoom from "react-reveal";


const Projects = () => {

    const social = {
        backgroundImage: `url(${socialNetwork})`,
    };
    const calculator = {
        backgroundImage: `url(${calculatorImg})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImg})`,
    };


    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"My Projects"}/>
                <Zoom bottom>
                    <div className={style.projects}>
                        <Project
                            style={calculator}
                            title={"Calculator"}
                            shortDescr={"Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet."}
                        />
                        <Project
                            style={social}
                            title={"Social Network"}
                            shortDescr={"Ab dignissimos doloremque hic minima non, repellat reprehenderit totam voluptate voluptatibus! In, molestias"}
                        /><Project
                        style={todolist}
                        title={"Todolist"}
                        shortDescr={"Ab dignissimos doloremque hic minima non, repellat reprehenderit totam voluptate voluptatibus! In, molestias"}
                    />
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default Projects;