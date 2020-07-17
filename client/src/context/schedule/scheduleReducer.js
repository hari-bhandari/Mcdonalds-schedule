import {
    GET_SCHEDULE, GET_SCHEDULE_ERROR
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case GET_SCHEDULE:
            return {
                ...state,
                schedule: action.payload,
                loading: false
            }
        case GET_SCHEDULE_ERROR:
            return {
                ...state,
                error:'Incorrect Password'
            }

        default:
            return state
    }
}