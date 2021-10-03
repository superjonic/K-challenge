import { 
    GET_BLUE,
    GET_PINK,
    GET_MILESTONES_PHYSICAL,
    GET_MILESTONES_SOCIAL,
    ADD_MILESTONES,
    UPDATE_MILESTONES,
    } from "../actions";
  
  
  const initialState = {
    color: "",
    info: {
      data: [],
      loading: false
    }, //API data
    milestoneStatus: [],
    
    
};
  
  function rootReducer (state = initialState, action) {     
      switch(action.type) {
     

        case ADD_MILESTONES: 
        let index = state.milestoneStatus.findIndex(m => m.id === action.payload.id)
        
        if(index === -1) {
          return {
            ...state,
            milestoneStatus: [...state.milestoneStatus, action.payload]
            }
         }
          return state 

        case UPDATE_MILESTONES: 
          const ind = state.milestoneStatus.findIndex(m => m.id === action.payload.id)
          const newArray = [...state.milestoneStatus]

          newArray[ind].status = action.payload.status

          return {
            ...state,
            milestoneStatus: newArray
          }

        case GET_MILESTONES_PHYSICAL:
          return {
            ...state,
            info: action.payload
          }
        case GET_MILESTONES_SOCIAL:
          return {
            ...state,
            info: action.payload
          }
    

        case GET_BLUE:
          return {
            ...state,
            color : action.payload
          }
  
        case GET_PINK:
            return {
              ...state,
              color : action.payload
            }      
                   
        default:
          return state;
      }
    }
    
    export default rootReducer;