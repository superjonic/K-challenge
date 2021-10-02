
export const GET_PHYSICAL = "GET_PHYSICAL";
export const GET_SOCIAL = "GET_SOCIAL";




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
