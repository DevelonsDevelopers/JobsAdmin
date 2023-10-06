import { ALL_JOBS_API, LOADING, SUCCESS } from "../../Utils/Constant"
import * as api from '../../store/index'


export const getAllJobsApi = () => async(dispatch) => {
    try{
        dispatch({ type: LOADING })
        const {data: {data} } = await api.fetchAllJobsApi()
        dispatch ({ type: ALL_JOBS_API, payload: { jobsApi: data }})
        dispatch ({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}