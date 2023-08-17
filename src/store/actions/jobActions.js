import { ALL_JOBS, LOADING, SUCCESS } from "../../Utils/Constant";
import * as api from '../../store/index'



export const AllJobs = () => async (dispatch) => {
    try{
        dispatch ({ type: LOADING})
        const { data: { data }} = await api.fetchAllJobs();
        dispatch({ type: ALL_JOBS, payload: { jobs: data }})
        dispatch({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}