import React from 'react'
import styles from './Contact.module.css';

export function Contact() {
    return (
        <div className={styles.contactBlock}>
            <div className={styles.container}>
                <h2 className={styles.title}>CONTACT</h2>
                <form className={styles.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                </form>
                <a href="./">SEND</a>
            </div>
        </div>
    )
}