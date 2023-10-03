import { ERROR, GETCOMPANY_DASHBOARD, GETCOMPANY_LINECHART, GET_BARCHART, GET_DASHBOARD, GET_LINECHART, GET_PIECHART, GET_REPORTS, GET_TRANSACTIONS, LOADING, SUCCESS } from "../../Utils/Constant"


const dashboard = (state = { isLoading: true, success: false, error: false, dashboard: [] }, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, isLoading: true }
        case SUCCESS:
            return { ...state, isLoading: false, success: true, error: false }
        case ERROR:
            return { ...state, isLoading: false, success: false, error: true }
        case GET_DASHBOARD:
            return { ...state, dashboard: action.payload.dashboard }
        case GETCOMPANY_DASHBOARD:
            return { ...state, companyDashboard: action.payload.companyDashboard }
        case GETCOMPANY_LINECHART:
            return { ...state, companylinechart: action.payload }
        case GET_PIECHART:
            return { ...state, piechart: action.payload }
        case GET_LINECHART:
            return { ...state, linechart: action.payload }
        case GET_BARCHART:
            return { ...state, barchart: action.payload }
        case GET_REPORTS:
            return { ...state, report: action.payload }
        case GET_TRANSACTIONS:
            return { ...state, transaction: action.payload }
        default:
            return state;
    }
}

export default dashboard;