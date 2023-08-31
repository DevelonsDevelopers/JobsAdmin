import { ALL_TAGS, CREATE_TAG, DELETE_TAG, ERROR, GET_TAG, LOADING, SUCCESS, TAG_STATUS, UPDATE_TAG } from "../../Utils/Constant"


const tag = (state = { isLoading: true, success: false, error: false, tags: [] }, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, isLoading: true }
        case SUCCESS:
            return { ...state, isLoading: false, success: true, error: false }
        case ERROR:
            return { ...state, isLoading: false, success: false, error: true }
        case ALL_TAGS:
            return { ...state, tags: action.payload.tags }
        case GET_TAG:
            return { ...state, tag: action.payload }
        case CREATE_TAG:
            return { ...state, tags: [...state.tags, action.payload] }
        case UPDATE_TAG:
            return { ...state, tags: state.tags.map((tag) => (tag.id === action.payload.id ? action.payload : tag)) }
        case TAG_STATUS:
            return { ...state, tags: state.tags.map((tag) => (tag.id === action.payload.id ? {...tag, status: action.payload.status} : tag)) }
        case DELETE_TAG:
            return { ...state, tags: state.tags.filter((tag) => tag.id !== action.payload) }
        default:
            return state;

    }
}

export default tag;
