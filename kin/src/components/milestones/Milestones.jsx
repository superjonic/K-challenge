import React from "react";
import Milestone from '../milestone/Milestone';
import styles from './milestones.module.css';

export default function Milestones(){
    return (
        <div className={styles.container}>
            <Milestone />
            <Milestone />
            <Milestone />

        </div>
    )
}