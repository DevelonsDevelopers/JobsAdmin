import { ALL_JOBS, ALL_PLANS, CREATE_PLAN, DELETE_PLAN, ERROR, GET_PLAN, LOADING, SUCCESS, UPDATE_PLAN } from "../../Utils/Constant"


const plan = (state = { isLoading: true, success: false, error: false, plans: [] }, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, isLoading: true }
        case SUCCESS:
            return { ...state, isLoading: false, success: true, error: false }
        case ERROR:
            return { ...state, isLoading: false, success: false, error: true }
        case ALL_PLANS:
            return { ...state, plans: action.payload.plans }
        case GET_PLAN:
            return { ...state, plan: action.payload }
        case CREATE_PLAN:
            return { ...state, plans: [...state.plans, action.payload] }
        case UPDATE_PLAN:
            return { ...state, plans: state.plans.map((plan) => (plan.id === action.payload.id ? action.payload : plan)) }
        case DELETE_PLAN:
            return { ...state, plans: state.plans.filter((plan) => plan.id !== action.payload)}
        default:
            return state;

    }
}

export default plan;
