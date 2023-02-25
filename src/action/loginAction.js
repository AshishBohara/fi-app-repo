export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const login = (params) => {
    return { type: LOGIN, params }
}

export const loginSuccess = (response) => {
    return { type: LOGIN_SUCCESS, response }
}
export const loginFail = (response) => {
    return { type: LOGIN_FAIL, response }
}