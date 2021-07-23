import React from "react";
import style from "./Projects.module.scss"
import styleContainer from "../../common/styles/Container.module.css"
import Project from "./project/Project";
import Title from "../../common/components/title/Title";
import socialNetwork from "./../../assets/image/sn3.jpg"
// import componentJpg from "./../../assets/image/component.jpg"
import pageProfileImage from "../../assets/image/pageProfile.jpg"
import calculatorImg from "./../../assets/image/calculator2.png"
import todoImg from "./../../assets/image/todo.png"
import Zoom from "react-reveal";
import okoloMoryaImg from "./../../assets/image/okolomorya.png"
import wobImage from "../../assets/image/wob.jpg"
import corporationChatImg from "../../assets/image/corporationChat.jpg"
import linckerImg from "../../assets/image/lincker.png"


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
    // const compon = {
    //     backgroundImage: `url(${componentJpg})`,
    // };
    const okoloMorya = {
        backgroundImage: `url(${okoloMoryaImg})`,
    };
    const pageProfile = {
        backgroundImage: `url(${pageProfileImage})`,
    };
    const wob = {
        backgroundImage: `url(${wobImage})`,
    };
    const corporationChat = {
        backgroundImage: `url(${corporationChatImg})`
    };
    const lincker = {
        backgroundImage: `url(${linckerImg})`
    }


    return (
        <div id={"projects"} className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={"My Projects"}/>
                <Zoom bottom>
                    <div className={style.projects}>

                        <Project
                            style={social}
                            title={"Social Network"}
                            shortDescr={"RestAPI, React, Redux, TypeScript, Classes, Hooks, Redux-form, Axios, Grid, Module CSS"}
                            linkGitHub={"https://github.com/ArtsiomYermakou/social-network"}
                            linkGHPages={"https://artsiomyermakou.github.io/social-network/#/profile"}

                        />
                        <Project
                            style={todolist}
                            title={"Todolist"}
                            shortDescr={"React, Redux, API, Material-UI, TypeScript, Classes, Hooks, Axios, Grid, Module CSS"}
                            linkGitHub={"https://github.com/ArtsiomYermakou/less_todo_main"}
                            linkGHPages={"https://artsiomyermakou.github.io/less_todo_main/"}
                        />
                        <Project
                            style={pageProfile}
                            title={"Personal Profile"}
                            shortDescr={"NextJS, React, API, Material-UI, TypeScript, Heroku, LocalStorage, Classes, Hooks, Axios, Module CSS"}
                            linkGitHub={"https://github.com/ArtsiomYermakou/test_sun"}
                            linkGHPages={"https://project-name-a.herokuapp.com"}
                        />
                        <Project
                            style={calculator}
                            title={"Calculator"}
                            shortDescr={"JS, SCSS"}
                            linkGitHub={"https://github.com/ArtsiomYermakou/Calculator-UI"}
                            linkGHPages={"https://artsiomyermakou.github.io/Calculator-UI/"}
                        />
                        {/*<Project*/}
                        {/*    style={compon}*/}
                        {/*    title={"Mini component test"}*/}
                        {/*    shortDescr={"JS, SCSS, Material-UI, TypeScript, Hooks, Module CSS"}*/}
                        {/*    linkGitHub={"https://github.com/ArtsiomYermakou/ignat-lessons"}*/}
                        {/*    linkGHPages={"https://artsiomyermakou.github.io/ignat-lessons/#/"}*/}
                        {/*/>*/}
                        <Project
                            style={okoloMorya}
                            title={"Property For Sale"}
                            shortDescr={"NextJS, TypeScript, Styled-components, Ant Design, Hooks"}
                            linkGHPages={"https://private-project-r9v918w86.vercel.app/"}
                        />
                        <Project
                            style={wob}
                            title={"WOW Boosting"}
                            shortDescr={"NextJS, TypeScript, Redux, Thunk, Styled-components, Hooks, custom google-maps, google-auth"}
                            linkGHPages={"https://wob.vercel.app/"}
                        />
                        <Project
                            style={corporationChat}
                            title={"Corporate chat"}
                            shortDescr={"React, TypeScript, Redux, Thunk, Styled-components, Hooks, Material-ui"}
                            linkGHPages={"https://artsiomyermakou.github.io/messanger-proto/"}
                        />
                        <Project
                            style={lincker}
                            title={"LinkedIn Extension"}
                            shortDescr={"React, TypeScript, Redux, Thunk, SASS, Hooks, Ant Design, Moment"}
                            linkGHPages={"https://google.com"}
                        />
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default Projects;