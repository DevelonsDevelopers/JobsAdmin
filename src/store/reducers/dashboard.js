import { ERROR, GET_DASHBOARD, GET_PIECHART, GET_REPORTS, GET_TRANSACTIONS, LOADING, SUCCESS } from "../../Utils/Constant"


const dashboard = (state = {isLoading: true, success: false, error: false, dashboard: []}, action) =>{
    switch(action.type){
        case LOADING:
            return {...state, isLoading: true}
        case SUCCESS:
            return {...state, isLoading: false, success: true, error: false}
        case ERROR:
            return {...state, isLoading: false, success: false, error: true}
        case GET_DASHBOARD:
            return {...state, dashboard: action.payload.dashboard}
        case GET_PIECHART:
            return {...state, piechart: action.payload}
        case GET_REPORTS:
            return {...state, report: action.payload}
        case GET_TRANSACTIONS:
            return {...state, transaction: action.payload}
        default:
            return state;
    }
}

export default dashboard;