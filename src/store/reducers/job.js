import { ALL_JOBS, CREATE_JOB, DELETE_JOB, ERROR, GETCATEGORY_JOB, GETCITY_JOB, GETCOMPANY_JOB, GETCOUNTRY_JOB, GET_JOB, JOBS_STATUS, LOADING, SUCCESS, UPDATE_JOB } from "../../Utils/Constant"


const job = (state = { isLoading: true, success: false, error: false, jobs: [] }, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, isLoading: true }
        case SUCCESS:
            return { ...state, isLoading: false, success: true, error: false }
        case ERROR:
            return { ...state, isLoading: false, success: false, error: true }
        case ALL_JOBS:
            return { ...state, jobs: action.payload.jobs }
        case GET_JOB:
            return { ...state, job: action.payload }
        case GETCATEGORY_JOB:
            return { ...state, jobs: action.payload }
        case GETCOUNTRY_JOB:
            return { ...state, jobs: action.payload }
        case GETCITY_JOB:
            return { ...state, jobs: action.payload }
        case GETCOMPANY_JOB:
            return { ...state, jobs: action.payload }
        case CREATE_JOB:
            return { ...state, jobs: [...state.jobs, action.payload] }
        case UPDATE_JOB:
            return { ...state, jobs: state.jobs.map((job) => (job.id === action.payload.id ? action.payload : job)) }
        case JOBS_STATUS:
            return { ...state, jobs: state.jobs.map((job) => (job.id === action.payload.id ? { ...job, status: action.payload.status } : job)) }
        case DELETE_JOB:
            return { ...state, jobs: state.jobs.filter((job) => job.id !== action.payload) }
        default:
            return state;

    }
}

export default job;


