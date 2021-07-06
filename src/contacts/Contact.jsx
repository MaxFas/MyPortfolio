import React from 'react'
import styles from './Contact.module.css';
import Title from "../commons/components/Title";
import {useFormik} from "formik";
import axios from "axios";

export function Contact() {

    const formik = useFormik({
        initialValues: {
            contact: '',
            name: '',
            message: ''
        },
        onSubmit: value => {
            axios.post('https://smtp-nj-server.herokuapp.com/sendMessage', value)
                .then(() => {
                    alert('Your message has been sent')
                })
        }
    })

    return (
        <div className={styles.contactBlock}>
            <div className={styles.container}>
                <Title title={'Contact'}/>
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <input className={styles.formInputs}
                           {...formik.getFieldProps('contact')} type="text" placeholder={'Name'}/>
                    <input className={styles.formInputs}
                           {...formik.getFieldProps('name')} placeholder={'E-mail'}type="email" />
                    <textarea className={styles.formTextareaForm}
                              {...formik.getFieldProps('message')} placeholder={'Your message'}/>
                              <button className={styles.linkForm}>SEND</button>
                </form>
            </div>
        </div>
    )
}


// const form = document.querySelector('#contact-form')
// form.addEventListener('sumbit', (e)=> {
//     e.preventDefault()
//     axios.post ('http://localhost:3010/sendMessage'){
//
//     }
// })