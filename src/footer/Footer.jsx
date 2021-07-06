import styles from './Footer.module.css';
import React from "react";
import VKImg from "../assets/imgs/vk.jpg";
import TGImg from "../assets/imgs/telegramm.png";
import GHImg from "../assets/imgs/gh.png";

function Footer() {


    const vk= {
        backgroundImage: `url(${VKImg})`,
    };
    const tg= {
        backgroundImage: `url(${TGImg})`,
    };
    const gh= {
        backgroundImage: `url(${GHImg})`,
    };

    return (
        <div id='contacts' className={styles.footer}>
            <div className={styles.container}>
            <a href="" className={styles.title} >
                <h2 >Max Fascov</h2>
            </a>
            <div className={styles.LinksContainer}>
                <div style={vk} className={styles.linkContainer}><a href="https://vk.com/id379528327"></a></div>
                <div style={tg} className={styles.linkContainer}><a href="https://t.me/MaxFasc"></a></div>
                <div style={gh} className={styles.linkContainer}><a href="https://github.com/MaxFas"></a></div>
            </div>
            </div>
        </div>
    );
}

export default Footer;