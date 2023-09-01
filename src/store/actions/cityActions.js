import {  ALL_CITIES, CITY_STATUS, CREATE_CITY, DELETE_CITY, GETCOUNTRY_CITY, GET_CITY, LOADING, SUCCESS, UPDATE_CITY } from "../../Utils/Constant"
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
        const { data: { data } } = await api.fetchCity(id)
        console.log(id)
        dispatch({ type: GET_CITY, payload: data})
    } catch(error){
        console.log(error)
    }
}

export const getCitybyCountry = (country) => async (dispatch) => {
    try{
        const { data: { data } } = await api.fetchCitybyCountry(country)
        console.log(data)
        dispatch({ type: GETCOUNTRY_CITY, payload: data})
    } catch(error){
        console.log(error)
    }
}

export const createCity = (city) => async (disptach) =>{
    try{
        console.log(city)
        const {data: {data}} = await api.createCity(city)
        console.log(city)
        disptach({ type: CREATE_CITY, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const updateCity = (id , city) => async (dispatch) => {
    try{
        const { data } = await api.updateCity(city.name, city.country, city.description, id)
        console.log(data)
        dispatch({ type: UPDATE_CITY, payload: data})
    }catch(error){
        console.log(error)
    }
}


export const cityStatus = (id, status) => async (dispatch) => {
    try{
        const { data } = await api.cityStatus(id, status)
        console.log(data)
        dispatch({ type: CITY_STATUS, payload: { id: id, status: status }})
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