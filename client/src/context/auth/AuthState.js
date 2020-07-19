import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from "../../utils/setAuthToken";

import {
    GET_TOKEN, REMOVE_TOKEN, LOAD_USER,CLEAR_ERRORS,LOGOUT, LOAD_USER_FAIL
} from '../types'
const AuthState=props=>{
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: false,
        loading: true,
        user: null,
        schedule:{},
        error: null
    };
    const[state,dispatch]=useReducer(authReducer,initialState)
    const loadUser=async ()=>{
        if(localStorage.token){
            setAuthToken(localStorage.token)
        }
        try{
            const res =await axios.get('/me');
            dispatch({
                type:LOAD_USER,
                payload:res.data.data
            })

        }catch (err) {
            dispatch({
                type:LOAD_USER_FAIL
            })
        }
    };
    const clearErrors=()=>{
        dispatch({type:CLEAR_ERRORS})
    }

    const getUserLoggedIn=async (formData)=>{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const res = await axios.post('/login', formData, config);

            dispatch({
                type: GET_TOKEN,
                payload: res.data.token
            });
            await loadUser();
        } catch (err) {
            console.log(err.response.data.error)
            dispatch({
                type: REMOVE_TOKEN,
                payload: err.response.data.error
            })
        }


    }
    // const updateDetails=async (formData)=>{
    //     const config = {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     };
    //     try {
    //         const res = await axios.put('/api/v1/auth/updatedetails', formData, config);
    //
    //         dispatch({
    //             type: UPDATE_DETAILS,
    //             payload:res.data.data
    //         });
    //
    //     } catch (err) {
    //         console.log(err.response.data.error)
    //         dispatch({
    //             type: REQUEST_DENIED,
    //             payload: err.response.data.error
    //         });
    //     }
    // }
    const logout=async ()=>{

        dispatch({
            type: LOGOUT,
        });
        // await axios.get(`/api/v1/auth/logout`);


        // try {
        //     const res = await axios.get(`/api/v1/auth/logout`);
        //     dispatch({
        //         type: LOGOUT,
        //     });
        //     props.history.push('/login')
        //
        // } catch (err) {
        //     dispatch({
        //         type: LOGOUT,
        //     });
        // }
    }
    return(
        <AuthContext.Provider value={{
            token:state.token,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            user:state.user,
            error:state.error,
            schedule:state.schedule,
            getUserLoggedIn,
            loadUser,clearErrors,logout
        }}>{props.children}</AuthContext.Provider>
    )

    
}
export default AuthState;