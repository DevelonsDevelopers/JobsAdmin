import {  ALL_USERS, LOADING, SUCCESS } from '../../Utils/Constant';
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