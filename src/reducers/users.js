const initialState = {
    users: [
        {
            id: 1,
            nama: 'azim',
            alamat: 'bandung',

        },
        {
            id: 2,
            nama: 'aa',
            alamat: 'sumedang',

        },

    ],
    error: false,
    title: 'redux-crud'
}

function users(state = initialState, action) {
    return state
}

export default users