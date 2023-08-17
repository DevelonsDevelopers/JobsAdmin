import { ALL_TAGS, LOADING, SUCCESS } from '../../Utils/Constant';
import * as api from '../../store/index'



export const AllTags = () => async (dispatch) => {
    try{
        dispatch ({ type: LOADING})
        const { data: { data }} = await api.fetchAllTags();
        dispatch({ type: ALL_TAGS, payload: { tags: data }})
        dispatch({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}