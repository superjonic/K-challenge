import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { getSocial, getMilestonesSocial, getMilestonesPhysical } from "../../redux/actions";
import styles from './tabbutton.module.css';



export default function TabButton(){
    const dispatch = useDispatch()

    const [toggle, setToggle] = useState()
    console.log(toggle)

    const handlePink = () => {
        dispatch(getMilestonesSocial())
        dispatch(getSocial("pink"))
        setToggle("pink")
       
        //here it must call the social milestones, dispatch the action that changes redux state
    }

    const handleBlue = () => {
        dispatch(getMilestonesPhysical())
        dispatch(getSocial("blue"))
        setToggle("blue")
        
    }


    return (
        <div className={styles.tabbox}>
            
            <button className={toggle === "blue" || !toggle ?  styles.btnLeftClicked : styles.btnLeft } onClick={handleBlue}  >
                <h4 className={toggle=== "blue" && styles.blueText}>Physical</h4>
            </button>

            <button className={toggle === "pink" ? styles.btnRightClicked : styles.btnRight} onClick={handlePink}>
                <h4 className={toggle=== "pink" && styles.pinkText}>Social & Emotional</h4>
            </button>
        </div>
    )
}