import styles from './Header.module.css';
import React from "react";
import Nav from "../nav/Nav";

function Header() {
    return (
        <div className={styles.header}>
            <Nav/>
        </div>
    );
}

export default Header;
