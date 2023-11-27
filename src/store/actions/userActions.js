import {  ALL_USERS, CREATE_USER, DELETE_USER, GET_USER, LOADING, SUCCESS, UPDATE_USER, USER_STATUS } from '../../Utils/Constant';
import * as api from '../../store/index'



export const AllUsers = () => async (dispatch) => {
    try{
        dispatch ({ type: LOADING})
        const { data: { data }} = await api.fetchAllUsers();
        dispatch({ type: ALL_USERS, payload: { users: data }})
        dispatch({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}
export const getUser = (id) => async (dispatch) => {
    try{
        const { data: { data } } = await api.fetchUser(id)
        dispatch({ type: GET_USER, payload: data})
    } catch(error){
        console.log(error)
    }
}

export const createUser = (user) => async (disptach) =>{
    try{
        const {data: {data}} = await api.createUser(user)
        disptach({ type: CREATE_USER, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const updateUser = (id , user) => async (dispatch) => {
    try{
        console.log('actionUser', user)
        const { data: {data} } = await api.updateUser(id, user.name, user.username, user.email, user.password, user.phone, user.address)
        dispatch({ type: UPDATE_USER, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const userStatus = (id, status) => async (dispatch) => {
    try{
        const { data } = await api.userStatus(id, status)
        console.log(data)
        dispatch({ type: USER_STATUS, payload: { id: id, status: status }})
    }catch(error){
        console.log(error)
    }
}

export const DeleteUser = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteUser(id)
        console.log(id)
        dispatch({ type: DELETE_USER, payload: id})
    } catch(error) {
        console.log(error);
    }
}