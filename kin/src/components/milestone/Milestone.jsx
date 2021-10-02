import React, { useState } from "react";
import styles from './milestone.module.css';

export default function Milestone({title, ageRange}){
    const [status, setStatus] = useState("initial")
    const [completed, setCompleted] = useState(false)

    const handleNotAnswered = () => {
        setStatus("uncompleted")
    }
    const handleUncompleted = () => {
        setStatus("completed")
    }
    const handleCompleted = () => {
        setStatus("uncompleted")
    }

    return (
        <div className={styles.container}>
            <div  className={styles.containerTitle}>
            <p>{title}</p>
            <p className={styles.ageRange}>Usually achieved by {ageRange} months</p>
            </div>

            { status === "initial" && 
                <button  className={styles.btnNot} onClick={handleNotAnswered}>
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


            {/* {
                completed ? 
                <button  className={styles.btn} onClick={handleStatus}>
                    <h4> Completed </h4>
                </button> 
                : 
                <button  className={styles.btn} onClick={handleStatus}>
                    <h4> Uncompleted </h4>
                </button> 

            } */}

            
        </div>
    )
}