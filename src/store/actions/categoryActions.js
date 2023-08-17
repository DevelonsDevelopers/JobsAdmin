import * as api from '../../store/index'
import { ALL_CATEGORIES, LOADING, SUCCESS } from '../../Utils/Constant';

export const AllCategories = () => async (dispatch) => {
    try {
        dispatch ({ type: LOADING })
        const { data: { data } } = await api.fetchAllCategories();
        dispatch ({ type: ALL_CATEGORIES, payload: { categories: data }})
        dispatch ({ type: SUCCESS })
    } catch (error) {
        console.log(error)
    }
}