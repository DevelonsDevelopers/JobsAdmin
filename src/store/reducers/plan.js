import { ALL_JOBS, ALL_PLANS, ERROR, LOADING, SUCCESS } from "../../Utils/Constant"


const plan = (state = {isLoading: true, success: false, error: false, plans: []}, action) =>{
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true}
        case ALL_PLANS:
            return {...state, plans: action.payload.plans}
        default:
            return state;

    }
}

export default plan;
