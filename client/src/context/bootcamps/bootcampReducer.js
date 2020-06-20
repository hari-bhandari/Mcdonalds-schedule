import {
    GET_BOOTCAMP,GET_BOOTCAMPS,BOOTCAMP_ERROR,FILTER_BOOTCAMPS,GET_BOOTCAMP_ERROR
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case GET_BOOTCAMPS:
            return {
                ...state,
                bootcamps:action.payload,
                loading:false

            }
        case GET_BOOTCAMP:
            return {
                ...state,
                currentBootcamp:action.payload,
                loading:false
            }
        case BOOTCAMP_ERROR:
            return {
                ...state,
                currentBootcamp:null,
                error:action.payload
            }
        case BOOTCAMP_ERROR:
            return {
                ...state,
                error:action.payload
            }
        case FILTER_BOOTCAMPS:
            console.log(state)
            return {
                ...state,
                filtered:state.bootcamps.filter(bootcamp=>{
                    if(bootcamp.averageCost<action.payload[1]&&bootcamp.averageRating>action.payload[0]){
                        console.log(bootcamp)
                        return bootcamp;
                    }
                })
            }
        default:
            return state
    }
}