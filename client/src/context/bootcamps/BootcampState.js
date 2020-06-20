import React, {useReducer} from "react";
import bootcampContext from "./bootcampContext";
import bootcampReducer from "./bootcampReducer"
import axios from "axios";
import {GET_BOOTCAMP,GET_BOOTCAMPS,BOOTCAMP_ERROR,FILTER_BOOTCAMPS, GET_BOOTCAMP_ERROR}from '../types'

const BootcampState=props=>{

    const initialState={
        bootcamps:null,
        currentBootcamp:null,
        error:null,
        loading:true,
        filtered:null
    }
    const[state,dispatch]=useReducer(bootcampReducer,initialState)
    //get one bootCamp
    const getBootcamp=async (id)=>{
        try {
            const res = await axios.get(`/api/v1/bootcamps/${id}`);

            dispatch({
                type: GET_BOOTCAMP,
                payload: res.data.data
            });


        } catch (err) {
            dispatch({
                type: GET_BOOTCAMP_ERROR,
                payload: err.response.data.error
            });
        }
    }
    //get all bootcamps
    const getAllBootcamps=async ()=>{
        try {
            const res = await axios.get('/api/v1/bootcamps');

            dispatch({
                type: GET_BOOTCAMPS,
                payload: res.data.data
            });


        } catch (err) {
            dispatch({
                type: BOOTCAMP_ERROR,
                payload: err.response.data.error
            });
        }
    }
    const getAllBootcampsByLocation=async (zipcode,radius)=>{
        if(zipcode && radius){
            try {
                const res = await axios.get(`/api/v1/bootcamps/radius/${zipcode}/${radius}`);


                dispatch({
                    type: GET_BOOTCAMPS,
                    payload: res.data.data
                });


            } catch (err) {
                dispatch({
                    type: BOOTCAMP_ERROR,
                    payload: err.response.data.error
                });
            }
        }

    }
    const bootcampsFilter=(rating,budget)=>{
        if(rating&&budget){
            dispatch({
                type:FILTER_BOOTCAMPS,
                payload:[rating,budget]
            })
        }

    }

    //get 1 bootcamp
    return(
        <bootcampContext.Provider value={{
            bootcamps:state.bootcamps,
            currentBootcamp:state.currentBootcamp,
            loading:state.loading,
            error:state.error,
            filtered:state.filtered,
            getAllBootcamps,
            getAllBootcampsByLocation,
            bootcampsFilter,
            getBootcamp
        }}>{props.children}</bootcampContext.Provider>
    )

}
export default BootcampState;