import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMilestones, updateMilestones } from "../../redux/actions";
import styles from './milestone.module.css';

export default function Milestone({title, ageRange, id}){
    const milestoneRedux = useSelector((state) => state.milestoneStatus.filter(m => m.id === id))
    console.log(milestoneRedux, "viene de redux")
    const statusRedux = milestoneRedux[0]?.status
    console.log(statusRedux, "status de redux")


    const [status, setStatus] = useState("not answered")
    
    const [milestoneStatus, setMilestoneStatus] = useState({
        id: id,
        title: title,
        status: statusRedux || status  
    })
    

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
    useEffect(() => {   //el problema radica aqui, cuando quiero volver a la tab physical se monta de nuevo el comp borrando los status, deberia suceder esto en el home cuando se renderiza
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

            { statusRedux === "not answered" && 
                <button  className={styles.btnNot} onClick={handleNotAnswered} name="status" >
                    <h4> Not answered </h4>
                </button>
            }
            { statusRedux === "uncompleted" && 
                <button  className={styles.btnUncompleted} onClick={handleUncompleted}>
                    <h4> Uncompleted </h4>
                </button>
            }
            { statusRedux === "completed" && 
                <button  className={styles.btnCompleted} onClick={handleCompleted}>
                    <h4> Completed </h4>
                </button>
            }

            
        </div>
    )
}