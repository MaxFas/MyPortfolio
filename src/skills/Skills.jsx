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
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={styles.skills}>
                    <Skill title={'CSS/HTML'} description={"Never wanted to dance with nobody not you!"}/>
                    <Skill title={'TS'} style={ts} description={"Never wanted to dance with nobody but you!"}/>
                    <Skill title={'REDUX'} style={redux} description={"Never wanted to dance with nobody but you"}/>
                    <Skill title={'REACT'} style={react} description={"Wouldn't take no for an answer you f**king bitch!"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;