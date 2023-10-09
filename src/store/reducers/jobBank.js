import { ALL_JOBBANKS, CREATE_JOBBANK, DELETE_JOBBANK, ERROR, LOADING, SUCCESS, UPDATE_JOBBANK } from "../../Utils/Constant";


const jobBank = (state = { isLoading: true, success: false, error: false, jobBanks: [] }, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, isLoading: true }
        case SUCCESS:
            return { ...state, isLoading: false, success: true, error: false }
        case ERROR:
            return { ...state, isLoading: false, success: false, error: true }
        case ALL_JOBBANKS:
            return { ...state, jobBanks: action.payload.jobBanks }
        case CREATE_JOBBANK:
            return { ...state, jobBanks: [...state.jobBanks, action.payload] }
        case UPDATE_JOBBANK:
            return { ...state, jobBanks: state.jobBanks.map((jobBank) => (jobBank.id === action.payload.id ? action.payload : jobBank)) }
        case DELETE_JOBBANK:
            return { ...state, jobBanks: state.jobBanks.filter((jobBank) => jobBank.id !== action.payload) }
        default:
            return state;
    }
}

export default jobBank;