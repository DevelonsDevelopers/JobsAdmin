import * as api from '../../store/index'
import { ALL_COUNTRIES, LOADING, SUCCESS } from "../../Utils/Constant"


export const AllCountries =()=> async(dispatch) => {
    try{
        dispatch({ type: LOADING})
        const {data: { data }} = await api.fetchAllCountries()
        dispatch({ type: ALL_COUNTRIES, payload: {countries: data} })
        dispatch({ type: SUCCESS })
    } catch(error){
        console.log(error)
    }
}