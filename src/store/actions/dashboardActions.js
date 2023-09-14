import { GET_BARCHART, GET_DASHBOARD, GET_LINECHART, GET_PIECHART, GET_REPORTS, GET_TRANSACTIONS, LOADING, SUCCESS } from '../../Utils/Constant'
import * as api from '../../store/index'


export const getDashboard = () => async(dispatch) => {
    try{
        dispatch({ type: LOADING })
        const {data: {data} } = await api.getDashboard()
        dispatch ({ type: GET_DASHBOARD, payload: { dashboard: data }})
        dispatch ({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}



export const getpiechart = () => async(dispatch) => {
    try{
        dispatch({ type: LOADING })
        const {data: {data} } = await api.getpiechart()
        // console.log(data)
        dispatch ({ type: GET_PIECHART, payload:  data })
        dispatch ({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}

export const getLineChart = () => async(dispatch) => {
    try{
        dispatch({ type: LOADING })
        const {data: {data} } = await api.lineChart()
        // console.log(data)
        dispatch ({ type: GET_LINECHART, payload:  data })
        dispatch ({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}

export const getBarChart = () => async(dispatch) => {
    try{
        dispatch({ type: LOADING })
        const {data: {data} } = await api.barChart()
        // console.log(data)
        dispatch ({ type: GET_BARCHART, payload:  data })
        dispatch ({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}

export const getReports = () => async(dispatch) => {
    try{
        dispatch({ type: LOADING })
        const {data: {data} } = await api.getReports()
        // console.log(data)
        dispatch ({ type: GET_REPORTS, payload:  data })
        dispatch ({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}
export const getTransaction = () => async(dispatch) => {
    try{
        dispatch({ type: LOADING })
        const {data: {data} } = await api.getTransactions()
        // console.log(data)
        dispatch ({ type: GET_TRANSACTIONS, payload:  data })
        dispatch ({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}