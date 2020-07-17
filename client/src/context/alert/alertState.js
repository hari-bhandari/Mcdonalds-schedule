import React, {useReducer} from "react";
import AlertContext from "./AlertContext";
import alertReducer from "./alertReducer";
import uuid from 'react-uuid';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types'

const AlertState=props=>{
    const initialState=[{msg:'',id: uuid()}]

    const [state,dispatch]=useReducer(alertReducer,initialState);

    //set alert
    const setAlert=(msg,type,timeout=5000)=>{
        const id=uuid();
        dispatch({
            type:SET_ALERT,
            payload:{msg,type,id}
        })

            setTimeout(()=>dispatch({type:REMOVE_ALERT,payload:id }),timeout)
    }
    return (
        <AlertContext.Provider value={{
            alerts:state,
            setAlert

        }}>
            {props.children}
        </AlertContext.Provider>
    )

}
export default AlertState;