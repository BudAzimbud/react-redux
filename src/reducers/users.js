import { GET_USER_LIST } from "../actions/userAction"

const initialState = {
    users: false,
    error: false,
    title: 'redux-crud'
}

function users(state = initialState, action) {
    switch (action.type) {
        case GET_USER_LIST:
            return {
                ...state,
                users: action.payload.data
            }
        default:
            return state
    }
}

export default users