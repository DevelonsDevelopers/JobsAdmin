import { ALL_COMPANIES, COMPANY_STATUS, CREATE_COMPANIES, CREATE_COMPANY, DELETE_COMPANIES, DELETE_COMPANY, ERROR, GET_COMPANIES, GET_COMPANY, LOADING, SUCCESS, UPDATE_COMPANIES, UPDATE_COMPANY } from "../../Utils/Constant";



const company = (state = {isLoading: true, success: false, error: false , companies: []}, action) => {
    switch(action.type) {
        case LOADING:
            return {...state, isLoading: true}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true}
        case ALL_COMPANIES:
            return {...state, companies: action.payload.companies}
        case GET_COMPANY: 
            return {...state, company: action.payload} 
        case CREATE_COMPANY: 
            return {...state, companies: [...state.companies, action.payload] } 
        case UPDATE_COMPANY:
            return {...state, companies: state.companies.map((company) => (company.id === action.payload.id ? action.payload: company))}
            case COMPANY_STATUS:
                return { ...state, companies: state.companies.map((company) => (company.id === action.payload.id ? { ...company, status: action.payload.status } : company)) }
        case DELETE_COMPANY:
            return {...state, companies: state.companies.filter((company) => (company.id !== action.payload))}
        default: 
            return state;
    }
}

export default company;