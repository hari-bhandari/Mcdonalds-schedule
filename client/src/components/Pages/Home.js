import React from 'react';
import Schedule from "../ScheduleBox/Schedule";
import NoticeBoard from "../ScheduleBox/NoticeBoard";

const Home = () => {
    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-lg-4">
                    <Schedule/>
                </div>
                <div className="col-lg-7">
                    <NoticeBoard/>
                </div>
            </div>

        </div>
    );
};

export default Home;