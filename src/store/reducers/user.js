import { ALL_USERS, CREATE_USER, DELETE_USER, ERROR, GET_USER, LOADING, SUCCESS, UPDATE_USER } from "../../Utils/Constant"


const user = (state = { isLoading: true, success: false, error: false, users: [] }, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, isLoading: true }
        case SUCCESS:
            return { ...state, isLoading: false, success: true, error: false }
        case ERROR:
            return { ...state, isLoading: false, success: false, error: true }
        case ALL_USERS:
            return { ...state, users: action.payload.users }
        case GET_USER:
            return { ...state, user: action.payload }
        case CREATE_USER:
            return { ...state, users: [...state.users, action.payload] }
        case UPDATE_USER:
            return { ...state, users: state.users.map((user) => (user.id === action.payload.id ? action.payload : user)) }
        case DELETE_USER:
            return { ...state, users: state.users.filter((user) => user.id !== action.payload) }
        default:
            return state;

    }
}

export default user;
