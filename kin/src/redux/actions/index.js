import axios from 'axios';
export const GET_MILESTONES_PHYSICAL = "GET_MILESTONES_PHYSICAL"; 
export const GET_MILESTONES_SOCIAL = "GET_MILESTONES_SOCIAL"; 
export const GET_PHYSICAL = "GET_PHYSICAL";
export const GET_SOCIAL = "GET_SOCIAL";



const token = 'token=5105f4358e45f6f98057a654c882b7742c3ac5241c81a706acc48c84f8acde9f8a344993ac42369627ae9f2caf1eed42ff1be9562fe2167c9c80908e76e95c49'

const url1 = 'https://staging.kinedu.com/api/v3/skills/2/milestones';
const url2 = 'https://staging.kinedu.com/api/v3/skills/23/milestones';



export function getPhysical(color) {
    return {
        type: GET_PHYSICAL,
        payload: color
    }
}

export function getSocial(color) {
    return {
        type: GET_SOCIAL,
        payload: color
    }
}

export function getMilestonesPhysical() {
    return function (dispatch) {
       return axios.get(`${url2}?Token=5105f4358e45f6f98057a654c882b7742c3ac5241c81a706acc48c84f8acde9f8a344993ac42369627ae9f2caf1eed42ff1be9562fe2167c9c80908e76e95c49`, { headers: { 'Authorization': `Token ${token}`} }) // consulto la API
       .then((milestones) => {
           console.log(milestones)
           dispatch({
               type: GET_MILESTONES_PHYSICAL,
               payload: milestones.data
           })
       })
       .catch((err) => console.log(err))
    }
}

export function getMilestonesSocial() {
    return function (dispatch) {
       return axios.get(`${url1}?Token=5105f4358e45f6f98057a654c882b7742c3ac5241c81a706acc48c84f8acde9f8a344993ac42369627ae9f2caf1eed42ff1be9562fe2167c9c80908e76e95c49`, { headers: { 'Authorization': `Token ${token}`} }) // consulto la API
       .then((milestones) => {
           console.log(milestones)
           dispatch({
               type: GET_MILESTONES_SOCIAL,
               payload: milestones.data
           })
       })
       .catch((err) => console.log(err))
    }
}
