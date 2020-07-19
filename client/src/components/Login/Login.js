import React, {useState, useContext, useEffect} from 'react';
import './login.css'
import AuthContext from '../../context/auth/authContext'
import Spinner from "../spinner/Spinner";

const Login = (props) => {
    const authContext=useContext(AuthContext)
    const {getUserLoggedIn,isAuthenticated,loadUser}=authContext;
    useEffect(()=>{
        loadUser()
        // eslint-disable-next-line
    },[])
    useEffect(()=>{

        if(isAuthenticated){
            props.history.push('/schedule')
        }
        // eslint-disable-next-line
    },[isAuthenticated])

    const[user,setUser]=useState('')
    const[password,setPassword]=useState('')
    let loaded=true
    const onSubmit=async (e)=>{
        loaded=false
        e.preventDefault()
        await getUserLoggedIn({userId:user,password})
        loaded=true
        props.history.push('/schedule')
    }
    return (
        loaded?(
        <div className={'container1'}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 login-box">
                        <div className="col-lg-12 login-key">
                        </div>
                        <div className="col-lg-12 login-title">
                            Login to see your schedule
                        </div>
                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <form onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <label className="form-control-label">USERNAME</label>
                                        <input type="number" className="form-control" onChange={(e)=>{
                                            setUser(e.target.value  )
                                        }}/>

                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">PASSWORD</label>
                                        <input type="password" className="form-control" onChange={(e)=>{
                                            setPassword(e.target.value  )
                                        }}/>
                                    </div>

                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-6 login-btm login-text">
                                        </div>
                                        <div className="col-lg-6 login-btm login-button">
                                            <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2"></div>
                    </div>
                </div>
            </div>

        </div>
        ):(<div><Spinner/></div>)
    );
};

export default Login;