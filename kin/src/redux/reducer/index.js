import { 
    GET_PHYSICAL,
    GET_SOCIAL 
    } from "../actions";
  
  
  const initialState = {
    color: ""
};
  
  function rootReducer (state = initialState, action) {     
      switch(action.type) {
        // Aca va tu codigo;  
       
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