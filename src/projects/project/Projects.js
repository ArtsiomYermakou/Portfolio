import React from "react";
import style from "../project/Projects.module.css"
import styleContainer from "../../common/styles/Container.module.css"
import Project from "./project/Project";
import logo1 from "../../common/img/wind.jpg"
import logo2 from "../../common/img/EA.jpg"

const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={"Microsoft"}
                             projectName={"Windows"}
                             img={logo1}
                             link={"https://www.microsoft.com/ru-ru/windows"}
                             shortDescr={"Lorem ipsum dolor sit amet."}
                    />
                    <Project title={"Electronic Arts"}
                             projectName={"Electronic Arts"}
                             img={logo2}
                             link={"https://www.ea.com/ru-ru"}
                             shortDescr={"Ab dignissimos doloremque hic minima non, repellat reprehenderit totam voluptate voluptatibus! In, molestias"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects;