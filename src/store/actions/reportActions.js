import { ALL_REPORTS, LOADING, SUCCESS } from "../../Utils/Constant";
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