import { ALL_PLANS, LOADING, SUCCESS } from "../../Utils/Constant";
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