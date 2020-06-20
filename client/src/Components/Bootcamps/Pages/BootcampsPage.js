import React, {useContext, useEffect} from 'react';
import FilterByRatingAndBudget from "../../Forms/FilterByRatingAndBudget";
import FindByDistance from "../../Forms/FindByDistance";
import Bootcamps from "../Bootcamps";
import AuthContext from "../../../context/auth/authContext";
const BootcampsPage = () => {
    const authContext=useContext(AuthContext);
    const{loadUser}=authContext;
    useEffect(()=>{
        loadUser();
        //eslint-disable-next-line
    },[])
    return (
        <section className="browse my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card card-body mb-4">
                            <h4 className="mb-3">By Location</h4>
                            <FindByDistance/>
                        </div>
                        <h4>Filter</h4>
                        <FilterByRatingAndBudget/>
                    </div>
                    <div className="col-md-8">
                            <Bootcamps/>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default BootcampsPage;