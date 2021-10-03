import React, {useState} from "react";
import Milestone from '../milestone/Milestone';
import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './milestones.module.css';



export default function Milestones(){
    const info = useSelector((state) => state.info)
    const { data, loading } = info
    

    return (
        <div className={styles.container}>
            {loading && (
                <Box style={{display:'flex', justifyContent:'center', height:'50vh', alignItems:'center'}}>
                <CircularProgress />
                </Box>
            )}
            {
                data?.data?.skill?.milestones.map((milestone) => {
                    return (
                        <Milestone key={milestone.id} title={milestone.title} ageRange ={data.data.skill.age_range} id={milestone.id} />
                    )
                }).slice(0, 4)
            }

        </div>
    )
}