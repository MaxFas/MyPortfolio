import styles from './Main.module.css';
import React from "react";
import styleContainer from "../commons/styles/Container.module.css"
import meImg from "../assets/imgs/me.jpg";
import backImg from "../assets/imgs/back.jpg";



function Main() {

    const me = {
        backgroundImage: `url(${meImg})`,
    };

    const back= {
        backgroundImage: `url(${backImg})`,
    };

    return (
        <div style={back} className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.greeting}>
                    <span>Hi There</span>
                    <h1 className={styles.title}>I am <span>Max Fascov</span></h1>
                    <p>The FrontEnd developer</p>
                </div>
                <div className={styles.photo}>
                    <div style={me} className={styles.img}> </div>
                </div>
            </div>
        </div>
    );
}

export default Main;

