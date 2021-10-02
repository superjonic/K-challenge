import React from "react";
import Header from "../header/Header";
import Button from "../button/Button";
import Milestones from './../milestones/Milestones';
import styles from './home.module.css';



export default function Home(){
    return (
        <div className={styles.home}>
            <Header />
            <Milestones />
            
             <Button />
           
           
            
        </div>
    )
}