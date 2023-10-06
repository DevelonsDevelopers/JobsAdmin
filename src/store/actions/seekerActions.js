import { ALL_REPORTS, ALL_SEEKERS, GET_SEEKER, LOADING, RECOMMENDED_SEEKER, SEEKER_STATUS, SUCCESS } from "../../Utils/Constant";
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

export const GetRecommendedSeeker = (job) => async (dispatch) => {
    try{
        const { data: { data }} = await api.fetchSeekerRecommended(job);
        dispatch({ type: RECOMMENDED_SEEKER, payload: data })
    } catch(error) {
        console.log(error)
    }
}

export const seekerStatus = (id, status) => async (dispatch) => {
    try{
        const { data } = await api.seekerStatus(id, status)
        console.log(data)
        dispatch({ type: SEEKER_STATUS, payload: { id: id, status: status }})
    }catch(error){
        console.log(error)
    }
}

export const getSeeker = (id) => async (dispatch) => {
    try{
        const { data: { data } } = await api.fetchSeeker(id)
        dispatch({ type: GET_SEEKER, payload: data})
    } catch(error){
        console.log(error)
    }
}