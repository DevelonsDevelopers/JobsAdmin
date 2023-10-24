import { ERROR,  GET_ADS,  LOADING, SUCCESS, UPDATE_ADS } from "../../Utils/Constant"


const ad = (state = { isLoading: true, success: false, error: false, ads: [] }, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, isLoading: true }
        case SUCCESS:
            return { ...state, isLoading: false, success: true, error: false }
        case ERROR:
            return { ...state, isLoading: false, success: false, error: true }
        case GET_ADS:
            return { ...state, ads: action.payload.ads }
        case UPDATE_ADS:
            return { ...state, ads: state.ads.map((ad) => (ad.id === action.payload.id ? action.payload : ad)) }
        default:
            return state;
    }
}

export default ad;