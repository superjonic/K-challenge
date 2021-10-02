import { 
    GET_PHYSICAL,
    GET_SOCIAL,
    GET_MILESTONES_PHYSICAL,
    GET_MILESTONES_SOCIAL 
    } from "../actions";
  
  
  const initialState = {
    color: "",
    milestones: []
};
  
  function rootReducer (state = initialState, action) {     
      switch(action.type) {
        // Aca va tu codigo;  
        case GET_MILESTONES_PHYSICAL:
          return {
            ...state,
            milestones: action.payload
          }
        case GET_MILESTONES_SOCIAL:
          return {
            ...state,
            milestones: action.payload
          }
    

        case GET_PHYSICAL:
          return {
            ...state,
            color : action.payload
          }
  
        case GET_SOCIAL:
            return {
              ...state,
              color : action.payload
            }      
                   
        default:
          return state;
      }
    }
    
    export default rootReducer;