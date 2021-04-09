import styles from './Prodject.module.css';
import React from "react";

function Project(props) {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.iconBlock}>
                <a href="./" className={styles.link}>Review</a>
            </div>
            <h3 className={styles.title}>{props.title}</h3>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default Project;
