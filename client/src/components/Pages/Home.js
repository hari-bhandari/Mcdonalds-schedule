import React, {useContext, useEffect} from 'react';
import Schedule from "../ScheduleBox/Schedule";
import NoticeBoard from "../ScheduleBox/NoticeBoard";
import AuthContext from "../../context/auth/authContext";

const Home = (props) => {
    const authContext=useContext(AuthContext)
    const {loadUser,isAuthenticated,error}=authContext;
    useEffect(()=>{
        loadUser()
        // eslint-disable-next-line
    },[])
    useEffect(()=>{
        if(!isAuthenticated){
            props.history.push('/')
        }
        console.log(error)
        // eslint-disable-next-line
    },[isAuthenticated,error])

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <Schedule push={props.history.push}/>
                </div>
                {/*<div className="col-lg-9">*/}
                {/*    <NoticeBoard/>*/}
                {/*</div>*/}
            </div>

        </div>
    );
};

export default Home;