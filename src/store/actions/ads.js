import { ALL_APPLIEDUSERS, GET_ADS, LOADING, SUCCESS, UPDATE_ADS } from "../../Utils/Constant"
import * as api from '../../store/index'


export const getAds = () => async(dispatch) => {
    try{
        dispatch({ type: LOADING })
        const {data: {data} } = await api.fetchAds()
        dispatch ({ type: GET_ADS, payload: { ads: data }})
        dispatch ({ type: SUCCESS })
    } catch(error) {
        console.log(error)
    }
}

export const updateAds = (ads, id) => async(dispatch) => {
    try{
        const { data } = await api.updateAds(ads.banner_ad, ads.interstitial_ad, ads.count, ads.app_open, ads.publisher_id, id)
        dispatch ({ type: UPDATE_ADS, payload: data })
    } catch(error) {
        console.log(error)
    }
}