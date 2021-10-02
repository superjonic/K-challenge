import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import Header from "../header/Header";
import Button from "../button/Button";
import Milestones from './../milestones/Milestones';
import { getMilestonesPhysical } from '../../redux/actions';
import styles from './home.module.css';



export default function Home(){

 const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMilestonesPhysical())
    }, [])

    return (
        <div className={styles.home}>
            <Header />
            <Milestones />
            
             <Button />
           
           
            
        </div>
    )
}