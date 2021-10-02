import React from "react";
import { useSelector } from "react-redux";
import TabButton from "../tabbutton/TabButton";
import styles from './header.module.css';


export default function Header(){
    const color = useSelector((state) => state.color)
    const milestones = useSelector((state) => state.milestones)
    console.log(milestones.data)

    return (
        <div className ={color === "pink" ? styles.headerPink : styles.headerBlue }>

            <div className={styles.contUp}>
                <h2>Areas</h2>
                <TabButton />
                <div className={styles.divider}> </div>

                <h2>Skill: {milestones.data?.skill?.title}</h2>
                <div className= {styles.paragraph}>
                     <p>{milestones.data?.skill?.description}</p>
                </div>
                
            </div>
            
        </div>
    )
}