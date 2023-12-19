import { ALL_OFFERS, GET_OFFERS, LOADING, OFFERS_BY_COMPANY, SUCCESS } from "../../Utils/Constant"
import * as api from '../../store/index'


export const AllOffers = () => async(dispatch) => {
    try{
        dispatch({ type: LOADING })
        const {data: {data} } = await api.fetchAllOffers()
        dispatch ({ type: ALL_OFFERS, payload: { offers: data }})
        dispatch ({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}

export const getOffers = (id) => async (dispatch) => {
    try{
        const { data: {data} } = await api.fetchOffersById(id)
        dispatch({ type: GET_OFFERS, payload: data})
    } catch(error){
        console.log(error)
    }
}

export const GetOffersByCompany = (company) => async(dispatch) => {
    try{
        dispatch({ type: LOADING })
        const {data: {data} } = await api.fetchOfferByCompany(company)
        dispatch ({ type: OFFERS_BY_COMPANY, payload: data})
        dispatch({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}