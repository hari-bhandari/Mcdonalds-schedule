import React from 'react';
import {Link} from "react-router-dom";

const Bootcamp = ({value:{name,description,location,id,photo}}) => {
    const links=['https://media2.fdncms.com/metrotimes/imager/u/original/9508282/full-classroom-with-students-working-3.jpg',
                 'https://www.trilogyed.com/blog/wp-content/uploads/2018/05/columbia_coding_boot_camp2_brandon_colbert.jpg',
                  'https://blog.devmountain.com/wp-content/uploads/2018/03/EDIT-1364-e1522076635793.jpg',
                    'https://insights.dice.com/wp-content/uploads/2019/05/Coding-Bootcamp-Ratings-Dice.png']
    const randomImage=links[Math.floor(Math.random()*4)]
    return (
        <div>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={`http://localhost:5000/uploads/${photo}`} className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to={`/bootcamps/${id}`}
                                >{name}
                                    <span className="float-right badge badge-success"
                                    >8.8</span
                                    ></Link
                                >
                            </h5>
                            <span className="badge badge-dark mb-2">{location.city}</span>
                            <p className="card-text">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default Bootcamp;