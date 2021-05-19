import React from 'react'
import styles from './Contact.module.css';
import Title from "../commons/components/Title";

export function Contact() {
    return (
        <div className={styles.contactBlock}>
            <div className={styles.container}>
                <Title title={'Contact'} />
                <form className={styles.form}>
                    <input className={styles.formInputs} type="text" placeholder={'Name'}/>
                    <input className={styles.formInputs} placeholder={'E-mail'} type="text"/>
                    <textarea className={styles.formTextareaForm} placeholder={'Your message'} />
                </form>
                <a href="./"className={styles.linkForm}>SEND</a>
            </div>
        </div>
    )
}