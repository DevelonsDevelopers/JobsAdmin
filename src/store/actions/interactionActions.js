import { ALL_INTERACTIONS, GETCOMPANY_INTERACTIONS, GET_INTERACTIONS, LOADING, SUCCESS } from "../../Utils/Constant"
import * as api from '../../store/index'



export const AllInteraction = () => async(dispatch) => {
    try{
        dispatch({ type: LOADING })
        const {data: {data} } = await api.fetchAllInteraction()
        dispatch ({ type: ALL_INTERACTIONS, payload: { interactions: data }})
        dispatch ({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}
export const getInteractionById = (id) => async(dispatch) => {
    try{
        const { data: {data} } = await api.fetchInteractionById(id)
        dispatch ({ type: GET_INTERACTIONS, payload:  data })
    } catch(error) {
        console.log(error)
    }
}
export const getInteractionByCompany = (company) => async(dispatch) => {
    try{
        dispatch({ type: LOADING })
        const {data: {data} } = await api.fetchInteractionByCompany(company)
        console.log(data)
        dispatch ({ type: GETCOMPANY_INTERACTIONS, payload: data })
        dispatch({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}
