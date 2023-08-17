import { ALL_APPLIEDUSERS, LOADING, SUCCESS } from "../../Utils/Constant"
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