import React, {useContext, useState, useEffect} from 'react';
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/AlertContext";
import Spinner from "../spinner/Spinner";

const ManageAccount = () => {

    const authContext = useContext(AuthContext);


    const [fields, setFields] = useState({
        name: '',
        email: ''
    });
    const alertContext = useContext(AlertContext);
    const {setAlert} = alertContext;

    const {updateDetails, user, loadUser, error, loading} = authContext;
    const onChange = (e) => {
        setFields({...fields, [e.target.name]: e.target.value})
    }
    useEffect(() => {
        loadUser();
        //eslint-disable-next-line
    }, [])
    useEffect(() => {
        if (user !== null) {
            setFields({name: user.name, email: user.email})
        }
    }, [user])
    const {name, email} = fields
    const onSubmit = ((e) => {
        e.preventDefault();
        if (error !== null) {
            setAlert(`${fields.email} is not a valid email address`, 'danger')
        }
        if (fields.email == email) {
            setAlert(`Please enter a different email to ${fields.email}`, 'warning')
        } else {
            updateDetails({name, email})
            setAlert(`Email has been Changed to ${fields.email}`, 'success')
        }
    })
    if (loading) {
        return (
            <Spinner/>
        )
    }
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <div className="card bg-white py-2 px-4">
                        <div className="card-body">
                            <h1 className="mb-2">Manage Account</h1>
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Name"
                                        value={name}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        validator="isEmail"
                                        required
                                        className="form-control"
                                        placeholder="Email"
                                        value={email}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input
                                                type="submit"

                                                value="Update"
                                                className="btn btn-success btn-block"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageAccount;