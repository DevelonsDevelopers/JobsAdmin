import * as api from '../../store/index'
import { ALL_CATEGORIES, CREATE_CATEGORY, DELETE_CATEGORY, GET_CATEGORY, LOADING, SUCCESS, UPDATE_CATEGORY } from '../../Utils/Constant';

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

export const getCategory = (id) => async (dispatch) => {
    try{
        const { data } = await api.fetchCategory(id)
        dispatch({ type: GET_CATEGORY, payload: data})
    } catch(error){
        console.log(error)
    }
}

export const createCategory = (category) => async (disptach) =>{
    try{
        const {data: {data}} = await api.createCategory(category)
        disptach({ type: CREATE_CATEGORY, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const updateCategory = (id , category) => async (dispatch) => {
    try{
        const {data: {data} } = await api.updateCategory(id,category)
        dispatch({ type: UPDATE_CATEGORY, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const DeleteCategory = (id) => async (dispatch) => {
    try {
        const { data: { data } } = await api.deleteCategory(id)
        console.log(id)
        dispatch({ type: DELETE_CATEGORY, payload: id})
    } catch(error) {
        console.log(error);
    }
}