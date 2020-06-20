import React, {useContext, useEffect} from 'react';
import AuthContext from "../../../context/auth/authContext";
import BootcampContext from "../../../context/bootcamps/bootcampContext";
import Page404 from "../../404/Page404";
import Reviews from "../../reviews/Reviews";

const BootcampPage = (props) => {
    const bootcampContext = useContext(BootcampContext);
    const {currentBootcamp, getBootcamp} = bootcampContext;
    const authContext = useContext(AuthContext);
    const {loadUser} = authContext;
    const {match: {params}} = props;
    useEffect(() => {
        loadUser();
        getBootcamp(params.id)

    }, [])


    return (
        <div>
            {currentBootcamp?(
        <div className={'bootcamp mt-5'}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1>{currentBootcamp.name}</h1>
                        <p>{currentBootcamp.description}</p>
                        <p className="lead mb-4">Average Course Cost: <span
                            className="text-primary">{currentBootcamp.averageCost}</span></p>
                        <Reviews id={params.id}/>
                    </div>
                    <div className="col-md-4">
                        <img src="../" className="img-thumbnail" alt="kokl"/>
                            <h1 className="text-center my-4"><span
                                className="badge badge-secondary badge-success rounded-circle p-3">10</span> Rating
                            </h1>
                            <a href="add-review.html" className="btn btn-light btn-block my-3"><i
                                className="fas fa-pencil-alt"></i> Write a Review</a>
                            <a href="#" target="_blank"
                               className="btn btn-secondary btn-block my-3"><i
                                className="fas fa-globe"></i> Visit Website</a>
                            <div id='map' style={{width:'100%',height:'300px'}}></div>
                            <ul className="list-group list-group-flush mt-4">
                                <li className=" list-group-item"><i
                                    className={currentBootcamp.housing?"fas fa-check text-success":"fas fa-times text-danger"}></i> Housing
                                </li>
                                <li className=" list-group-item"><i
                                    className={currentBootcamp.jobAssistance?"fas fa-check text-success":"fas fa-times text-danger"}></i> Job Assistance
                                </li>
                                <li className=" list-group-item"><i
                                    className={currentBootcamp.jobGuarantee?"fas fa-check text-success":"fas fa-times text-danger"}></i> Job Guarantee
                                </li>
                                <li className=" list-group-item"><i
                                    className={currentBootcamp.acceptGi?"fas fa-check text-success":"fas fa-times text-danger"}></i> Accepts GI Bill
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>):(<Page404/>)}</div>

);
};

export default BootcampPage;