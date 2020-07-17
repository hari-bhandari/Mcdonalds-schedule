import React, {useReducer} from "react";
import scheduleContext from "./scheduleContext";
import bootcampReducer from "./scheduleReducer"
import axios from "axios";
import {GET_SCHEDULE, GET_SCHEDULE_ERROR} from '../types'

const ScheduleState= props=>{

    const initialState={
        schedule:null,
        error:null,
        loading:true
    }
    const[state,dispatch]=useReducer(bootcampReducer,initialState)
    //get schedule
    const getSchedule=async (user,password)=>{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const res = await axios.post('/schedule', {user,password}, config);
            dispatch({
                type: GET_SCHEDULE,
                payload: res.data
            });


        } catch (err) {
            dispatch({
                type: GET_SCHEDULE_ERROR,
                payload: err.response.data
            });
        }
    }
    return(
        <scheduleContext.Provider value={{
            schedule:state.schedule,
            loading:state.loading,
            error:state.error,
            getSchedule
        }}>{props.children}</scheduleContext.Provider>
    )

}
export default ScheduleState;