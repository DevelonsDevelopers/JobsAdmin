import { ALL_JOBS, ERROR, LOADING, SUCCESS } from "../../Utils/Constant"


const job = (state = {isLoading: true, success: false, error: false, jobs: []}, action) =>{
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true}
        case ALL_JOBS:
            return {...state, jobs: action.payload.jobs}
        default:
            return state;

    }
}

export default job;


