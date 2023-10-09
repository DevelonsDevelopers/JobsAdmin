import { ALL_JOBS_API, ERROR,  LOADING, SUCCESS } from "../../Utils/Constant"


const apiJob = (state = { isLoading: true, success: false, error: false, apiJobs: [] }, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, isLoading: true }
        case SUCCESS:
            return { ...state, isLoading: false, success: true, error: false }
        case ERROR:
            return { ...state, isLoading: false, success: false, error: true }
        case ALL_JOBS_API:
            return { ...state, apiJobs: action.payload.apiJobs }
        default:
            return state;
    }
}

export default apiJob;