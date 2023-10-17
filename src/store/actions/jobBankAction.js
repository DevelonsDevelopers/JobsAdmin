import {  ALL_JOBBANKS, CREATE_JOBBANK, DELETE_JOBBANK, LOADING, SUCCESS, UPDATE_JOBBANK } from "../../Utils/Constant"
import * as api from '../../store/index'



export const AllJobBanks = () => async (dispatch) => {
    try{
        dispatch ({ type: LOADING})
        const { data: { data }} = await api.fetchAllJobBanks();
        dispatch({ type: ALL_JOBBANKS, payload: { jobBanks: data }})
        dispatch({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}

export const CreateJobBank = (email) => async (disptach) =>{
    try{
        const {data: {data}} = await api.createJobBank(email)
        console.log(data)
        disptach({ type: CREATE_JOBBANK, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const UpdateJobBank = (id , email) => async (dispatch) => {
    try{
        const { data } = await api.updateJobBank(id, email)
        console.log(data)
        dispatch({ type: UPDATE_JOBBANK, payload: data})
    }catch(error){
        console.log(error)
    }
}


export const DeleteJobBank = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteJobBank(id)
        console.log(id)
        dispatch({ type: DELETE_JOBBANK, payload: id})
    } catch(error) {
        console.log(error);
    }
}