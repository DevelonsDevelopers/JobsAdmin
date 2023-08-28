import { ALL_TRANSACTIONS, GET_TRANSACTION, LOADING, SUCCESS } from '../../Utils/Constant';
import * as api from '../../store/index'



export const AllTransactions = () => async (dispatch) => {
    try{
        dispatch ({ type: LOADING})
        const { data: { data }} = await api.fetchAllTransactions();
        dispatch({ type: ALL_TRANSACTIONS, payload: { transactions: data }})
        dispatch({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}

export const getTransaction = (id) => async (dispatch) => {
    try{
        const { data: { data } } = await api.fetchTransaction(id)
        dispatch({ type: GET_TRANSACTION, payload: data})
    } catch(error){
        console.log(error)
    }
}