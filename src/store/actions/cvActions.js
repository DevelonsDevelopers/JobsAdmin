import { CVBY_USER } from '../../Utils/Constant'
import * as api from '../../store/index'



export const CvByUser = (user) => async (dispatch) => {
    try{
        const { data: { data } } = await api.fetchCvByUser(user)
        console.log(data)
        dispatch({ type: CVBY_USER, payload: data})
    } catch(error){
        console.log(error)
    }
}
