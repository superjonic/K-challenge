import React from "react";
import Modal from "../modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { getMilestonesSocial, getSocial} from "../../redux/actions";
import styles from './button.module.css';


export default function Button(){
   
    const area = useSelector((state) => state.info)
    const dispatch = useDispatch()

    const handlePink = () => {
        dispatch(getMilestonesSocial())
        dispatch(getSocial("pink"))
    }



    return (
        <>
        {
            area.data?.data?.skill?.id === 2 ? 

                <Modal />
            :
                <button className={styles.btn} onClick={handlePink}>
                    Next
                </button>

        }
        </>
    )
}