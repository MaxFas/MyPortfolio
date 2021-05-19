import styles from './Footer.module.css';
import React from "react";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
            <a href="" className={styles.title} >
                <h2 >Max Fascov</h2>
            </a>
            <div className={styles.LinksContainer}>
                <div className={styles.linkContainer}><a href=""></a></div>
                <div className={styles.linkContainer}><a href=""></a></div>
                <div className={styles.linkContainer}><a href=""></a></div>
                <div className={styles.linkContainer}><a href=""></a></div>
            </div>
            <span >© Живем в стране без прав </span>
            </div>
        </div>
    );
}

export default Footer;