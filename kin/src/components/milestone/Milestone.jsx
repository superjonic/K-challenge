import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMilestones, updateMilestones } from "../../redux/actions";
import styles from './milestone.module.css';

export default function Milestone({title, ageRange, id}){

    const [status, setStatus] = useState("not answered")
    
    const [milestoneStatus, setMilestoneStatus] = useState({
        id: id,
        title: title,
        status: status
    })
    console.log(milestoneStatus)

    const dispatch = useDispatch()

    const handleNotAnswered = () => {
        setStatus("uncompleted")
        setMilestoneStatus({
            ...milestoneStatus,
            status: "uncompleted"
        })
        
        
    }
    const handleUncompleted = () => {
        setStatus("completed")
        setMilestoneStatus({
            ...milestoneStatus,
            status: "completed"
        })
        
        
    }
    const handleCompleted = () => {
        setStatus("uncompleted")
        setMilestoneStatus({
            ...milestoneStatus,
            status: "uncompleted"
        })
    }
    useEffect(() => {
        dispatch(addMilestones(milestoneStatus))
    }, [])

    useEffect(() => {
        dispatch(updateMilestones(milestoneStatus))
    }, [status])

    return (
        <div className={styles.container}>
            <div  className={styles.containerTitle}>
            <p>{title}</p>
            <p className={styles.ageRange}>Usually achieved by {ageRange} months</p>
            </div>

            { status === "not answered" && 
                <button  className={styles.btnNot} onClick={handleNotAnswered} name="status" >
                    <h4> Not answered </h4>
                </button>
            }
            { status === "uncompleted" && 
                <button  className={styles.btnUncompleted} onClick={handleUncompleted}>
                    <h4> Uncompleted </h4>
                </button>
            }
            { status === "completed" && 
                <button  className={styles.btnCompleted} onClick={handleCompleted}>
                    <h4> Completed </h4>
                </button>
            }

            
        </div>
    )
}