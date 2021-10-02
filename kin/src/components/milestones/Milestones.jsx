import React, {useState} from "react";
import Milestone from '../milestone/Milestone';
import { useSelector } from "react-redux";
import styles from './milestones.module.css';



export default function Milestones(){
    const info = useSelector((state) => state.milestones)
    const { data } = info
    

    return (
        <div className={styles.container}>
            {
                data?.skill?.milestones.map((milestone) => {
                    return (
                        <Milestone key={milestone.id} title={milestone.title} ageRange ={data.skill.age_range} />
                    )
                }).slice(0, 4)
            }

        </div>
    )
}