import { ALL_REPORTS, GET_REPORT, LOADING, SUCCESS } from "../../Utils/Constant";
import * as api from '../../store/index'



export const AllReports = () => async (dispatch) => {
    try{
        dispatch ({ type: LOADING})
        const { data: { data }} = await api.fetchAllReports();
        dispatch({ type: ALL_REPORTS, payload: { reports: data }})
        dispatch({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}

export const getReport = (id) => async (dispatch) => {
    try{
        const { data: { data } } = await api.fetchReport(id)
        dispatch({ type: GET_REPORT, payload: data})
    } catch(error){
        console.log(error)
    }
}