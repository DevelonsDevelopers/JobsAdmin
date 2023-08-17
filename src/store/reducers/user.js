import {   ALL_USERS, ERROR, LOADING, SUCCESS } from "../../Utils/Constant"


const user = (state = {isLoading: true, success: false, error: false, users: []}, action) =>{
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true}
        case ALL_USERS:
            return {...state, users: action.payload.users}
        default:
            return state;

    }
}

export default user;
