import {  ALL_CITIES, LOADING, SUCCESS } from "../../Utils/Constant"
import * as api from '../../store/index'



export const AllCities = () => async (dispatch) => {
    try{
        dispatch ({ type: LOADING})
        const { data: { data }} = await api.fetchAllCities();
        dispatch({ type: ALL_CITIES, payload: { cities: data }})
        dispatch({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}