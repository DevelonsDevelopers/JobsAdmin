import { ALL_PLANS, CREATE_PLAN, DELETE_PLAN, GET_PLAN, LOADING, PLANS_STATUS, SUCCESS, UPDATE_PLAN } from "../../Utils/Constant";
import * as api from '../../store/index'



export const AllPlans = () => async (dispatch) => {
        try{
            dispatch({ type: LOADING})
            const {data: {data}} = await api.fetchAllPlans()
            dispatch({ type: ALL_PLANS, payload: {plans: data}})
            dispatch({ type: SUCCESS})
        }catch(error){
            console.log(error);
        }
}

export const getPlan = (id) => async (dispatch) => {
    try{
        const { data: { data } } = await api.fetchPlan(id)
        dispatch({ type: GET_PLAN, payload: data})
    } catch(error){
        console.log(error)
    }
}

export const createPlan = (plan) => async (disptach) =>{
    try{
        const {data: {data}} = await api.createPlan(plan)
        disptach({ type: CREATE_PLAN, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const updatePlan = (id , plan) => async (dispatch) => {
    try{
        const { data } = await api.updatePlan(id, plan.name, plan.amount, plan.type, plan.accounttype, plan.timeperiod, plan.purpose)
        dispatch({ type: UPDATE_PLAN, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const PlanStatus = (id, status) => async (dispatch) => {
    try{
        const { data } = await api.planStatus(id, status)
        console.log(data)
        dispatch({ type: PLANS_STATUS, payload: { id: id, status: status }})
    }catch(error){
        console.log(error)
    }
}

export const DeletePlan = (id) => async (dispatch) => {
    try {
        const { data } = await api.deletePlan(id)
        console.log(id)
        dispatch({ type: DELETE_PLAN, payload: id})
    } catch(error) {
        console.log(error);
    }
}
