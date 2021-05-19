import styles from './Main.module.css';
import React from "react";
import styleContainer from "../commons/styles/Container.module.css"

function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.greeting}>
                    <span>Hi There</span>
                    <h1 className={styles.title}>I am <span>Max Fascov</span></h1>
                    <p>The worst FrontEnd developer</p>
                </div>
                <div className={styles.photo}>

                </div>
            </div>
        </div>
    );
}

export default Main;
