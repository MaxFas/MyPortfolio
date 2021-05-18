import styles from './Prodject.module.css';
import React from "react";

function Project(props) {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.iconBlock} style={props.style}>
                <a href={props.link} className={styles.link}>Review</a>
            </div>
            <div className={styles.projectInfo}><h3 className={styles.title}>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>

        </div>
    );
}

export default Project;
