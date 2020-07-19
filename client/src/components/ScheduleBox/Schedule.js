import React, {useContext} from 'react';
import './schedule.css'
import AuthContext from "../../context/auth/authContext";
const Schedule =  ({push}) => {
    const authContext = useContext(AuthContext)
    const {loading, schedule, logout} = authContext;

    if (schedule === undefined) {
        localStorage.setItem('error','Authentication Error')
        logout()
        push('/')
        return (
            <div>Incorrect password or username</div>
        )
    }
    if (loading) {
        return (
            <div>Loading...</div>
        )

    }

    return (
        <div>
            <table className="table bg-white table-bordered" style={{height: '80vh'}}>
                <thead>
                <tr style={{fontSize: '25px'}}>
                    <th scope="col" style={{width: '10%', fontSize: '25px'}}>Day</th>
                    <th scope="col" style={{width: '60%'}}>Shift</th>
                </tr>
                </thead>
                <tbody style={{fontSize: '20px', textAlign: 'center'}}>
                <tr>
                    <th scope="">Monday</th>
                    <td>{schedule.Monday}</td>
                </tr>
                <tr>
                    <th scope="">Tuesday</th>
                    <td>{schedule.Tuesday}</td>
                </tr>
                <tr>
                    <th scope="">Wednesday</th>
                    <td>{schedule.Wednesday}</td>

                </tr>
                <tr>
                    <th scope="">Thursday</th>
                    <td>{schedule.Thursday}</td>
                </tr>
                <tr>
                    <th scope="">Friday</th>
                    <td>{schedule.Friday}</td>
                </tr>

                <tr>
                    <th scope="">Saturday</th>
                    <td>{schedule.Saturday}</td>

                </tr>
                <tr>
                    <th scope="">Sunday</th>
                    <td>{schedule.Sunday}</td>

                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;