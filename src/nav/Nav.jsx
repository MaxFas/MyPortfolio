import styles from './Nav.module.css';
import React from "react";

function Nav() {
    return (
        <div className={styles.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
}

export default Nav;
