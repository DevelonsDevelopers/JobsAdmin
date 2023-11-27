import { CVBY_USER, LOADING, RESET_STATE } from '../../Utils/Constant'
import * as api from '../../store/index'



export const CvByUser = (user) => async (dispatch) => {
    try{
        dispatch({ type: LOADING})
        const { data: { data } } = await api.fetchCvByUser(user)
        console.log(data)
        dispatch({ type: CVBY_USER, payload: data})
    } catch(error){
        console.log(error)
    }
}
