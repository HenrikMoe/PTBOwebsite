import * as api from "../api";
//import axios from 'axios'

//return dispatch object

export function generateSet(fiat){
    return(dispatch)=>{
        api.generatePost(fiat)
            .then((response)=>{
                response
                    .json()
                    .then((data)=>{
                        return data
                    })
                    .then((data)=> {
                        console.log(data)
                        return dispatch({
                            type:"UPDATE_OBJECT",
                            object: data,
                        })
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
        })
    }
}

export function generateRealize(setId, quantity){
    return(dispatch)=>{
        api.getRealizingSet(setId, quantity)
            .then((response)=>{
                response
                    .json()
                    .then((data)=>{
                        return data
                    })
                    .then((data)=> {
                        console.log(data)
                        return dispatch({
                            type:"UPDATE_OBJECT",
                            object: data,
                        })
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
        })
    }
}

// export function getUnrealizedSet(params) {
// 	return (dispatch) => {
// 		dispatch(getUnrealizedSetStarted());
// 		api.getUnrealizedSet(params)
// 			.then((res) =>
// 				res
// 					.json()
// 					.then((data) => {
// 						return data;
// 					})
// 					.then((data) => {
// 						return dispatch({
// 							type: "CREATE_SET_SUCCEEDED",
// 							payload: data,
// 						});
// 					})
// 			)
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	};
// }

// export function retrieveSet(){
//     return(dispatch)=>{
//         return axios.post().then((response)=>{
//             dispatch(updateObject(response.data))
//         })
//     }
// }

// export function updateObject(object){
//     return{
//         type: "UPDATE_OBJECT",
//         object: object
//     }
// }