import styles from './Prodjects.module.css';
import React from "react";
import Project from "./project/Prodject";
import Title from "../commons/components/Title";
import tdlImg from "./../assets/imgs/tdl.jpg"
import snImg from "./../assets/imgs/sn.jpg"
import sbImg from "./../assets/imgs/lib.jpg"

function Projects() {

    const tdl= {
        color: 'blue',
        backgroundImage: `url(${tdlImg})`,
    };
    const sb= {
        color: 'blue',
        backgroundImage: `url(${sbImg})`,
    };


    const social = {
        color: 'blue',
        backgroundImage: `url(${snImg})`,
    };

    return (
        <div id='projects' className={styles.projectsBlock}>
            <div className={styles.container}>
                <Title title={'My projects'}/>
                <div className={styles.projects}>
                    <Project title={'Social Network'} link={'https://maxfas.github.io/SocialNetwork/'}
                             style={social} description={"Gradual implementation of a full-fledged social network (login, displaying users, sending messages, creating your own page)"}/>
                    <Project title={'To-Do List'} link={'https://maxfas.github.io/ToDoList/'} style={tdl}
                             description={"An application where you can plan your tasks list. Implemented remove, create and change tasks.Also done work on error handling"}/>
                     <Project title={'Library'} link={'https://maxfas.github.io/SearchBooks//'} style={sb}
                             description={"A Google Books API-related app that makes it easy to find any book"}/>

                </div>
            </div>
        </div>
    );
}

export default Projects;
