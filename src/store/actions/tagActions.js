import { ALL_TAGS, CREATE_TAG, DELETE_TAG, GET_TAG, LOADING, SUCCESS, TAG_STATUS, UPDATE_TAG } from '../../Utils/Constant';
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

export const getTag = (id) => async (dispatch) => {
    try{
        const { data: { data } } = await api.fetchTag(id)
        dispatch({ type: GET_TAG, payload: data})
    } catch(error){
        console.log(error)
    }
}

export const createTag = (tag) => async (disptach) =>{
    try{
        const {data: {data}} = await api.createTag(tag)
        disptach({ type: CREATE_TAG, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const updateTag = (id , tag) => async (dispatch) => {
    try{
        const { data } = await api.updateTag( id, tag.name)
        dispatch({ type: UPDATE_TAG, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const tagStatus = (id , status) => async (dispatch) => {
    try{
        const { data } = await api.tagStatus( id, status)
        dispatch({ type: TAG_STATUS, payload: {id: id, status: status}})
    }catch(error){
        console.log(error)
    }
}

export const deleteTag = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteTag(id)
        console.log(id)
        dispatch({ type: DELETE_TAG, payload: id})
    } catch(error) {
        console.log(error);
    }
}