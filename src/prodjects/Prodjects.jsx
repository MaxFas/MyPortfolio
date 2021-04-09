import styles from './Prodjects.module.css';
import React from "react";
import Project from "./project/Prodject";

function Projects() {
    return (
        <div className={styles.projectsBlock}>
            <div className={styles.container}>
                <h2 className={styles.title}>MY PROJECTS</h2>
                <div className={styles.projects}>
                    <Project title={'Counter'} description={"I dont want to set the world on fire"}/>
                    <Project title={'Social Network'} description={"I just want to start..."}/>
                    <Project title={'To-Do List'} description={"...a flaming in your hearth"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
