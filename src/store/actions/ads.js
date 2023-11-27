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

export const UpdateAds = (ad, id) => async(dispatch) => {
    try{
        const { data } = await api.updateAds(ad.banner_ad, ad.interstitial_ad, ad.count, ad.app_open, ad.publisher_id, id)
        console.log(ad)
        dispatch ({ type: UPDATE_ADS, payload: data })
    } catch(error) {
        console.log(error)
    }
}