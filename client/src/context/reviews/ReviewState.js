import React, {useReducer} from "react";
import reviewReducer from './reviewReducer'
import reviewContext from './reviewContext'
import axios from "axios";
import {GET_BOOTCAMP_ERROR, GET_REVIEWS} from '../types'

const ReviewState=props=>{
    const initialState={
        reviews:null,
        bootcamp:null,
        loading:true,
        error:null,
    }
    const[state,dispatch]=useReducer(reviewReducer,initialState)
    const getReviews=async (id)=>{
        try {
            initialState.bootcamp=id;
            const res = await axios.get(`/api/v1/bootcamps/${id}/reviews`);

            dispatch({
                type: GET_REVIEWS,
                payload: res.data.data
            });


        } catch (err) {
            dispatch({
                type: GET_BOOTCAMP_ERROR,
                payload: err.response.data.error
            });
        }
    }
    return(
        <reviewContext.Provider value={{
            reviews:state.reviews,
            bootcamp:state.bootcamp,
            loading:state.loading,
            error:state.error,
            getReviews
        }}>
            {props.children}
        </reviewContext.Provider>
    )
}
export default ReviewState;