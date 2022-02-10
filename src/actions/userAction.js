import axios from 'axios'

export const GET_USER_LIST = 'GET_USER_LIST'
export const GET_USER_DETAIL = 'GET_USER_DETAIL'
export const POST_USER_CREATE = 'POST_USER_CREATE'
export const POST_USER_EDIT = 'POST_USER_EDIT'


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



export const createUser = (data) => {
    return dispatch => {
        axios.post('http://localhost:5000/users', data).then((res) => {
            dispatch({
                type: POST_USER_CREATE,
                payload: {
                    data: res.data,
                    errorMessage: false
                }

            })
        }).catch((err) => {
            dispatch({
                type: POST_USER_CREATE,
                payload: {
                    data: false,
                    errorMessage: err.message
                }

            })
        })
    }
}



export const editUser = (data ,id) => {
    return dispatch => {
        axios.put('http://localhost:5000/users/' + id, data).then((res) => {
            dispatch({
                type: POST_USER_EDIT,
                payload: {
                    data: res.data,
                    errorMessage: false
                }

            })
        }).catch((err) => {
            dispatch({
                type: POST_USER_EDIT,
                payload: {
                    data: false,
                    errorMessage: err.message
                }

            })
        })
    }
}

