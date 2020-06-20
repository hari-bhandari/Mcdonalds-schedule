import React, {Fragment, useContext, useEffect, useState} from 'react';
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/AlertContext";

const Register = (props) => {
    const [user,setUser]=useState({
        name:'',
        email:'',
        password:'',
        password2:'',
        role:'publisher'})
    const alertContext= useContext(AlertContext);
    const {setAlert}=alertContext;
    const authContext=useContext(AuthContext);
    const {getUserRegistered,isAuthenticated,clearErrors,error,loadUser}=authContext;
    const {name,email,password,password2,role}=user;

    const onChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        loadUser();
    },[])
        useEffect(()=>{

            if(isAuthenticated){
                props.history.push('/');
            }
            if(error!==null){
                setAlert(error,'danger')
                clearErrors();
            }
            // eslint-disable-next


        },[error,isAuthenticated,props.history])

    const onSubmit=(e)=>{
            e.preventDefault();
            if(name!==''||email!==''||password2!==''||password!==''){
                setAlert('empty fields','danger')
            }

            if(error!==null){
                setAlert(error,'danger')
            }
            if(password!==password2){
                setAlert('password donot match','danger')
            }
            else {
            getUserRegistered({
                name,
                email,
                password
            })}
        }
    return (
        <Fragment>
        <section className="form mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <div className="card bg-white p-4 mb-4">
                            <div className="card-body">
                                <h1><i className="fas fa-user-plus"></i> Register</h1>
                                <p>
                                    Register to list your bootcamp or rate, review and favorite
                                    bootcamps
                                </p>
                                <form onSubmit={(e)=>{
                                    e.preventDefault();
                                    getUserRegistered({
                                        name,
                                        email,
                                        password
                                    })
                                }}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Enter full name"
                                            onChange={onChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Enter email"
                                            required
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Enter password"
                                            required
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="password2">Confirm Password</label>
                                        <input
                                            type="password"
                                            name="password2"
                                            className="form-control"
                                            placeholder="Confirm password"
                                            required
                                            onChange={onChange}
                                        />
                                    </div>

                                    <div className="card card-body mb-3">
                                        <h5>User Role</h5>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="role"
                                                value="user"
                                                checked={role==='user'}
                                                onChange={onChange}
                                            />
                                            <label className="form-check-label">
                                                Regular User (Browse, Write reviews, etc)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="role"
                                                value="publisher"
                                                checked={role==='publisher'}
                                                onChange={onChange}
                                            />

                                            <label className="form-check-label">
                                                Bootcamp Publisher
                                            </label>
                                        </div>
                                    </div>
                                    <p className="text-danger">
                                        * You must be affiliated with the bootcamp in some way in
                                        order to add it to DevCamper.
                                    </p>
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            value="Register"
                                            className="btn btn-primary btn-block"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Fragment>
    );
};

export default Register;
