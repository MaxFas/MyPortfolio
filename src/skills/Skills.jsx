import React from "react";
import styles from "./Skills.module.css"
import styleContainer from "../commons/styles/Container.module.css"
import Skill from "./skill/Skill";
import Title from "../commons/components/Title";
import tsImg from "../assets/imgs/ts.png";
import reactImg from "../assets/imgs/react.png";
import reduxImg from "../assets/imgs/redux.png";

function Skills() {

    const ts= {
        backgroundImage: `url(${tsImg})`,
    };

    const redux= {
        backgroundImage: `url(${reduxImg})`,
    };

    const react= {
        backgroundImage: `url(${reactImg})`,
    };

    return (
        <div id='skills' className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={styles.skills}>
                    <Skill title={'TS'} style={ts}
                           description={"JS/TS developer. Understanding how working engine V8, event loop (micro and macro tasks), prototypes"}/>
                    <Skill title={'REDUX'} style={redux}
                           description={"Ability to use the BLL manager. The use of one-way data flow, understanding the work of the store. Working with related libraries (react-redux, react-router-dom, reselect and others)"}/>
                    <Skill title={'REACT'} style={react}
                           description={"Ability to use the most popular front-end library for creating SPA.Working with functional (hooks) and class components"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;