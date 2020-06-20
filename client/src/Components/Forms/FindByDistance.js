import React, {useContext, useState} from 'react';
import BootcampContext from '../../context/bootcamps/bootcampContext'
import Bootcamps from "../Bootcamps/Bootcamps";
import 'bootstrap/dist/css/bootstrap.min.css'

const FindByDistance = () => {
    const [fields,setFields]=useState({miles:'',zipcode:''})
    const bootcampContext=useContext(BootcampContext);
    const {bootcamps,getAllBootcampsByLocation,loading}=bootcampContext;
    const {miles,zipcode}=fields
    const onChange=(e)=>{
        setFields({...fields,[e.target.name]:e.target.value})
    }
    onsubmit=(e)=>{
        e.preventDefault()
        getAllBootcampsByLocation(zipcode,miles)

    }
    return (
        <div>
            <form>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="miles"
                                placeholder="Miles From"
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="zipcode"
                                placeholder="Enter Zipcode"
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </div>
                <input
                    type="submit"
                    value="Find Bootcamps"
                    className="btn btn-primary btn-block"
                />
            </form>
        </div>
    );
};

export default FindByDistance;