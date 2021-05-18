import React from "react";
import styles from "./Skills.module.css"
import styleContainer from "../commons/styles/Container.module.css"
import Skill from "./skill/Skill";
import Title from "../commons/components/Title";

function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={styles.skills}>
                    <Skill title={'CSS/HTML'} description={"Never wanted to dance with nobody not you!"}/>
                    <Skill title={'TS'} description={"Never wanted to dance with nobody but you!"}/>
                    <Skill title={'JS'} description={"Never wanted to dance with nobody but you"}/>
                    <Skill title={'REACT'} description={"Wouldn't take no for an answer you f**king bitch!"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;