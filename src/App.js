import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/project/Projects";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Projects />
        </div>
    );
}

export default App;
