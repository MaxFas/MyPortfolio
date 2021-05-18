import styles from './Title.module.css';
import React from "react";

function Title(props) {
    return (
                <div className={styles.title}>
                    <h2>{props.title}</h2>
                </div>
    );
}

export default Title;
