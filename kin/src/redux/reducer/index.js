import { 
    GET_BLUE,
    GET_PINK,
    GET_MILESTONES_PHYSICAL,
    GET_MILESTONES_SOCIAL,
    ADD_MILESTONES,
    UPDATE_MILESTONES 
    } from "../actions";
  
  
  const initialState = {
    color: "",
    info: [], //API data
//  physicalStatus: [{title: '', status: '' }, { title: '', status: '' }, {title: '', status: ''}]
//  socialStatus: [{title: '', status: '' }, { title: '', status: '' }, {title: '', status: ''}]
    milestoneStatus: []

};
  
  function rootReducer (state = initialState, action) {     
      switch(action.type) {
     
        case ADD_MILESTONES: 
        return {
          ...state,
          milestoneStatus: [...state.milestoneStatus, action.payload]
        }

        case UPDATE_MILESTONES: 
          const index = state.milestoneStatus.findIndex(m => m.id === action.payload.id)
          const newArray = [...state.milestoneStatus]

          newArray[index].status = action.payload.status

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