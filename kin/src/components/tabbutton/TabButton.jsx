import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getSocial, getMilestonesSocial, getMilestonesPhysical } from "../../redux/actions";
import styles from './tabbutton.module.css';



export default function TabButton(){
    const dispatch = useDispatch()
    const color = useSelector((state) => state.color)
    console.log(color)

    const [toggle, setToggle] = useState()
    

    const handlePink = () => {
        dispatch(getMilestonesSocial())
        dispatch(getSocial("pink"))
        setToggle("pink")
       
    }

    const handleBlue = () => {
        dispatch(getMilestonesPhysical())
        dispatch(getSocial("blue"))
        setToggle("blue")
        
    }


    return (
        <div className={styles.tabbox}>
            
            <button className={color === "blue" || !color ?  styles.btnLeftClicked : styles.btnLeft } onClick={handleBlue}  >
                <h4 className={color === "blue" && styles.blueText}>Physical</h4>
            </button>

            <button className={color === "pink" ? styles.btnRightClicked : styles.btnRight} onClick={handlePink}>
                <h4 className={color === "pink" && styles.pinkText}>Social & Emotional</h4>
            </button>

        </div>
    )
}