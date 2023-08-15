import { ALL_TRANSACTIONS, LOADING, SUCCESS } from '../../Utils/Constant';
import * as api from '../../store/index'



export const AllTags = () => async (dispatch) => {
    try{
        dispatch ({ type: LOADING})
        const { data: { data }} = await api.fetchAllTransactions();
        dispatch({ type: ALL_TRANSACTIONS, payload: { transactions: data }})
        dispatch({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}