import React from "react";
import TabButton from "../tabbutton/TabButton";
import styles from './header.module.css';

export default function Header(){
    return (
        <div className ={styles.headerBlue}>

            <div className={styles.contUp}>
                <h2>Areas</h2>
                <TabButton />
                <div className={styles.divider}> </div>

                <h2>Skill: Standing</h2>
                <div className= {styles.paragraph}>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste obcaecati voluptatem sed quasi dolor dicta quia dolorem facilis, itaque dolorum illo commodi esse magnam debitis vitae architecto aspernatur rem beatae.</p>
                </div>
                
            </div>
            
        </div>
    )
}