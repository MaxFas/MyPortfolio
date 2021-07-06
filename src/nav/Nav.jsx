import styles from './Nav.module.css';
import React from "react";

function Nav() {
    return (
        <div className={styles.nav}>
            <a href="">Main</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contacts</a>
        </div>
    );
}

export default Nav;
