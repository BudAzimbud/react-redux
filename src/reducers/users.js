import { GET_USER_LIST ,GET_USER_DETAIL } from "../actions/userAction"

const initialState = {
    users: false,
    error: false,
    userDetail: false,
    errorDetail: false,
    title: 'redux-crud'
}

function users(state = initialState, action) {
    switch (action.type) {
        case GET_USER_LIST:
            return {
                ...state,
                users: action.payload.data
            }
        case GET_USER_DETAIL:
            return {
                ...state,
                userDetail: action.payload.data
            }
        default:
            return state
    }
}

export default users