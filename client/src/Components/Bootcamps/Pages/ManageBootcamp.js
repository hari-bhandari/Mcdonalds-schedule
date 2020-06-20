import React from 'react';

const ManageBootcamp = () => {
    return (
        <div>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="card bg-white py-2 px-4">
                            <div className="card-body">
                                <h1 className="mb-4">Manage Bootcamp</h1>
                                <div className="card mb-3">
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img src="img/image_1.jpg" className="card-img" alt="..."/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <a href="bootcamp.html"
                                                    >Devworks Bootcamp
                                                        <span className="float-right badge badge-success"
                                                        >8.8</span
                                                        ></a
                                                    >
                                                </h5>
                                                <span className="badge badge-dark mb-2">Boston, MA</span>
                                                <p className="card-text">
                                                    Web Development, UI/UX, Mobile Development
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form className="mb-4">
                                    <div className="form-group">
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                name="photo"
                                                className="custom-file-input"
                                                id="photo"
                                            />
                                            <label className="custom-file-label" htmlFor="photo"
                                            >Add Bootcamp Image</label
                                            >
                                        </div>
                                    </div>
                                    <input type="submit" className="btn btn-light btn-block" value="Upload Image"/>
                                </form>
                                <a href="add-bootcamp.html" className="btn btn-primary btn-block"
                                >Edit Bootcamp Details</a
                                >
                                <a href="manage-courses.html" className="btn btn-secondary btn-block"
                                >Manage Courses</a
                                >
                                <a href="#" className="btn btn-danger btn-block">Remove Bootcamp</a>
                                <p className="text-muted mt-5">
                                    * You can only add one bootcamp per account.
                                </p>
                                <p className="text-muted">
                                    * You must be affiliated with the bootcamp in some way in order
                                    to add it to DevCamper.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ManageBootcamp;