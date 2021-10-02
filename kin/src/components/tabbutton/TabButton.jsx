import React, {useState} from "react";
import styles from './tabbutton.module.css';

export default function TabButton(){
    const [toggle, setToggle] = useState(false)
    console.log(toggle)

    const handleTabButton = () => {
        setToggle(!toggle)
    }

    return (
        <div className={styles.tabbox}>

            <button className={styles.btnLeft} >
                <h4>Physical</h4>
            </button>

            <button className={styles.btnRight} onClick={handleTabButton}>
                <h4>Social & Emotional</h4>
            </button>
        </div>
    )
}