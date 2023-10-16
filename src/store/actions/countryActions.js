import * as api from '../../store/index'
import { ALL_COUNTRIES, COUNTRY_STATUS, CREATE_COUNTRY, DELETE_COUNTRY, GET_COUNTRY, LOADING, SUCCESS, UPDATE_COUNTRY } from "../../Utils/Constant"


export const AllCountries =()=> async(dispatch) => {
    try{
        dispatch({ type: LOADING})
        const {data: { data }} = await api.fetchAllCountries()
        console.log(data)
        dispatch({ type: ALL_COUNTRIES, payload: {countries: data} })
        dispatch({ type: SUCCESS })
    } catch(error){
        console.log(error)
    }
}

export const getCountry = (id) => async (dispatch) => {
    try{
        const { data: { data } } = await api.fetchCountry(id);
        dispatch ({ type: GET_COUNTRY, payload: data})
    } catch(error){
        console.log(error)
    }
}

export const createCountry = (country) => async (disptach) => {
    try{
        const { data : {data} } = await api.createCountry(country);
        disptach({ type: CREATE_COUNTRY, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const updateCountry = (id , country) => async (dispatch) => {
    try{
        const { data } = await api.updateCountry(id , country.name, country.description, country.flag)
        console.log(data)
        dispatch({ type: UPDATE_COUNTRY, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const countryStatus = (id, status) => async (dispatch) => {
    try{
        const { data } = await api.countryStatus(id, status)
        console.log(data)
        dispatch({ type: COUNTRY_STATUS, payload: { id: id, status: status }})
    }catch(error){
        console.log(error)
    }
}

export const deleteCountry = (id) => async (dispatch) => {
    try{
        const {data} = await api.deleteCountry(id)
        console.log(id)
        dispatch({ type: DELETE_COUNTRY, payload : id})
    }catch(error){
        console.log(error)
    }
}
