import axios from 'axios'

export const GET_USER_LIST = 'GET_USER_LIST'
export const GET_USER_DETAIL = 'GET_USER_DETAIL'

export const getUserList = () => {
    return dispatch => {
        axios.get('http://localhost:5000/users').then((res) => {
            dispatch({
                type: GET_USER_LIST,
                payload: {
                    data: res.data,
                    errorMessage: false
                }

            })
        }).catch((err) => {
            dispatch({
                type: GET_USER_LIST,
                payload: {
                    data: false,
                    errorMessage: err.message
                }

            })
        })
    }
}



export const getUserDetail = (id) => {
    return dispatch => {
        axios.get('http://localhost:5000/users/' + id).then((res) => {
            dispatch({
                type: GET_USER_DETAIL,
                payload: {
                    data: res.data,
                    errorMessage: false
                }

            })
        }).catch((err) => {
            dispatch({
                type: GET_USER_DETAIL,
                payload: {
                    data: false,
                    errorMessage: err.message
                }

            })
        })
    }
}



export const deleteUser = (id) => {
    return dispatch => {
        dispatch({
            type: GET_USER_DETAIL,
            payload: {
                data: false,
                errorMessage: false
            }

        })

    }
}

