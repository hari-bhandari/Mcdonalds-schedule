import {
    GET_TOKEN, REMOVE_TOKEN, LOAD_USER,CLEAR_ERRORS, LOGOUT, LOAD_USER_FAIL
} from '../types'
export default (state,action)=>{
    switch(action.type){
        case LOAD_USER:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user:action.payload,
                schedule:action.payload.schedule
            }
        case GET_TOKEN:
            localStorage.setItem('token',action.payload)
            console.log(action)
            return{
                ...state,
                token:action.payload,
                isAuthenticated:true,
                loading:false
            }
        case REMOVE_TOKEN:
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                isAuthenticated: false,
                loading: false,
                user:null,
                error:action.payload
        
        }
        case LOAD_USER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error:null
            }
        case LOGOUT:
            localStorage.removeItem('token')
            window.location.reload(false);
            return {
                ...state,
                token:null,
                isAuthenticated: false,
                loading: false,
                user:null,
                error:action.payload,
                schedule: {}
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }



        default:
         return state
    }
}