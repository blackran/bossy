const initialState = {
    isEdit: false,
    idDocument: ''
}

export default function documentReducer(state = initialState, action) {
    switch (action.type) {
        case 'IS_EDIT':
            return {
                ...state,
                isEdit: action.isEdit,
                idDocument: action.idDocument
            }
        default:
            return state
    }
}