import { ALL_REPORTS, ALL_SEEKERS, LOADING, SUCCESS } from "../../Utils/Constant";
import * as api from '../../store/index'



export const AllSeekers = () => async (dispatch) => {
    try{
        dispatch ({ type: LOADING})
        const { data: { data }} = await api.fetchAllSeekers();
        dispatch({ type: ALL_SEEKERS, payload: { seekers: data }})
        dispatch({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}