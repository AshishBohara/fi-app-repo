import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from '../action/loginAction'


const initialState = {
    apiState: "", // loading, success, error
    errorMessage: "",
    data: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                apiState: "loading",
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                apiState: "success",
                data: action.response.data
            }

        case LOGIN_FAIL:
            return {
                ...state,
                apiState: "error",
                errorMessage: action.response.data.message
            }

        default:
            return state
    }
}
