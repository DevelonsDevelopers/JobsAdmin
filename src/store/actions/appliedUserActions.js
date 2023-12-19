import { ALL_APPLIEDUSERS, CREATE_APPLIEDUSER, DELETE_APPLIEDUSER, GETCOMPANY_APPLIEDUSER, GETJOB_APPLIEDUSER, GET_APPLIEDUSER, LOADING, SUCCESS, UPDATE_APPLIEDUSER } from "../../Utils/Constant"
import * as api from '../../store/index'


export const AllAppliedUsers = () => async(dispatch) => {
    try{
        dispatch({ type: LOADING })
        const {data: {data} } = await api.fetchAllAppliedUsers()
        dispatch ({ type: ALL_APPLIEDUSERS, payload: { appliedUsers: data }})
        dispatch ({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}

export const getAppliedUser = (id) => async (dispatch) => {
    try{
        const { data: {data} } = await api.fetchAppliedUser(id)
        dispatch({ type: GET_APPLIEDUSER, payload: data})
    } catch(error){
        console.log(error)
    }
}
export const getJobbyAppliedUser = (job) => async (dispatch) => {
    try{
        const { data } = await api.fetchJobbyAppliedUser(job)
        dispatch({ type: GETJOB_APPLIEDUSER, payload: data})
    } catch(error){
        console.log(error)
    }
}
export const getCompanybyAppliedUser = (company) => async (dispatch) => {
    try{
        dispatch({ type: LOADING })
        const { data: {data} } = await api.fetchCompanybyAppliedUser(company)
        dispatch({ type: GETCOMPANY_APPLIEDUSER, payload: data})
        dispatch({ type: SUCCESS })
    } catch(error){
        console.log(error)
    }
}

export const createAppliedUser = (appliedUser) => async (disptach) =>{
    try{
        const {data: {data}} = await api.createAppliedUser(appliedUser)
        disptach({ type: CREATE_APPLIEDUSER, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const updateAppliedUser = (id , appliedUser) => async (dispatch) => {
    try{
        const {data: {data} } = await api.updateAppliedUser(id,appliedUser)
        dispatch({ type: UPDATE_APPLIEDUSER, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const DeleteAppliedUser = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteAppliedUser(id)
        console.log(id)
        dispatch({ type: DELETE_APPLIEDUSER, payload: id})
    } catch(error) {
        console.log(error);
    }
}