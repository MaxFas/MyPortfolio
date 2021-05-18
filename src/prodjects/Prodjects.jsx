import styles from './Prodjects.module.css';
import React from "react";
import Project from "./project/Prodject";
import Title from "../commons/components/Title";
import tdlImg from "./../assets/imgs/tdl.jpg"
import snImg from "./../assets/imgs/sn.jpg"

function Projects() {

    const tdl= {
        color: 'blue',
        backgroundImage: `url(${tdlImg})`,
    };


    const social = {
        color: 'blue',
        backgroundImage: `url(${snImg})`,
    };

    return (
        <div className={styles.projectsBlock}>
            <div className={styles.container}>
                <Title title={'My projects'}/>
                <div className={styles.projects}>
                    <Project title={'Social Network'} style={social} description={"I just want to start..."}/>
                    <Project title={'To-Do List'} style={tdl} description={"...a flaming in your hearth"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
