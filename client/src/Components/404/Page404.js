import React, {useContext, useEffect} from 'react';
import './Page404.scss'
import AuthContext from "../../context/auth/authContext";
const Page404 = () => {
    const authContext=useContext(AuthContext);
    const{loadUser}=authContext;
    useEffect(()=>{
        loadUser();
    },[])
    return (
        <div>
            <div className="stage">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>
        </div>
    );
};

export default Page404;