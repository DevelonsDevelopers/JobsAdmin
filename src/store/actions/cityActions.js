import {  ALL_CITIES, CREATE_CITY, DELETE_CITY, GET_CITY, LOADING, SUCCESS, UPDATE_CITY } from "../../Utils/Constant"
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

export const getCity = (id) => async (dispatch) => {
    try{
        const { data } = await api.fetchCity(id)
        dispatch({ type: GET_CITY, payload: data})
    } catch(error){
        console.log(error)
    }
}

export const createCity = (city) => async (disptach) =>{
    try{
        const {data: {data}} = await api.createCity(city)
        disptach({ type: CREATE_CITY, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const updateCity = (id , city) => async (dispatch) => {
    try{
        const {data: {data} } = await api.updateCity(id, city)
        dispatch({ type: UPDATE_CITY, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const DeleteCity = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteCity(id)
        console.log(id)
        dispatch({ type: DELETE_CITY, payload: id})
    } catch(error) {
        console.log(error);
    }
}