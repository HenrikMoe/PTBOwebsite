 //object properties here
 let defaultState = {
    object: {}
 }
 
 const mainReducer = (state=defaultState, action)=>{
     if(action.type==="UPDATE_OBJECT"){
         return{
             ...state,
             object: action
         }
     }
     else{
         return{
             ...state
         }
     }
 }
 
 export default mainReducer
 