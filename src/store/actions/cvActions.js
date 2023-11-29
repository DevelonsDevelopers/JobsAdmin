import { CVBY_USER, ERROR, LOADING, RESET_STATE, SUCCESS } from '../../Utils/Constant'
import * as api from '../../store/index'



export const CvByUser = (user) => async (dispatch) => {
    try{
        dispatch({ type: LOADING})
        const { data: { data } } = await api.fetchCvByUser(user)
        console.log(data)
        dispatch({ type: CVBY_USER, payload: data})
        dispatch({ type: SUCCESS })
    } catch(error){
        console.log(error)
        dispatch({ type: ERROR });
        dispatch({ type: RESET_STATE });
    }
}
