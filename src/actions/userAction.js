import axios from 'axios'

export const GET_USER_LIST = 'GET_USER_LIST'


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
