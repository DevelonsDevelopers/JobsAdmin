import {
    LOADING, GET_COVER_BY_USER,
    SUCCESS
} from "../../Utils/Constant";

import * as api from "../index";

export const CoverLetterByUser = (user, job) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data: { data } } = await api.fetchCoverByUser(user, job);
        console.log(data)
        dispatch({ type: GET_COVER_BY_USER, payload: { coverLetters: data } })
        dispatch({ type: SUCCESS })
    } catch (error) {
        console.log(error)
    }
}


