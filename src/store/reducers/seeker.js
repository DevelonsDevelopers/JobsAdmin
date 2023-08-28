import { ALL_JOBS, ALL_PLANS, ALL_SEEKERS, ERROR, GET_SEEKER, LOADING, SUCCESS } from "../../Utils/Constant"


const seeker = (state = {isLoading: true, success: false, error: false, seekers: []}, action) =>{
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true}
        case ALL_SEEKERS:
            return {...state, seekers: action.payload.seekers}
        case GET_SEEKER:
            return {...state, seeker: action.payload}
        default:
            return state;

    }
}

export default seeker;
