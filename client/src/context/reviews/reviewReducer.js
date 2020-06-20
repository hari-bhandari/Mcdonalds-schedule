import {GET_REVIEWS_ERROR,GET_REVIEWS} from '../types'
export default (state, action) => {
    switch (action.type) {
        case GET_REVIEWS:
            return{
                ...state,
                reviews:action.payload,
                loading:false,

            }
        case GET_REVIEWS_ERROR:
            return{
                ...state,
                reviews:null

            }
        default:
            return state
    }
    }