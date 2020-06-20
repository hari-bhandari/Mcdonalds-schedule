import React, {Fragment, useContext,useEffect} from 'react';
import BootcampContext from "../../context/bootcamps/bootcampContext";
import Bootcamp from "./Bootcamp";
const Bootcamps = () => {

    const bootcampContext=useContext(BootcampContext);
    const {bootcamps,getAllBootcamps,loading,filtered}=bootcampContext;
    useEffect(()=>{
        getAllBootcamps();//eslint-disable-next-line
    },[])
    if (bootcamps!==null&&bootcamps.length===0&&!loading) {
        return <h4 className={"mt-5"}>No Bootcamp found</h4>
    }
    return (
        <Fragment>

            {bootcamps!==null&& !loading?(
                filtered !==null ? filtered.map(bootcamp=>(
                        <Bootcamp value={bootcamp} key={bootcamp._id}/>)): bootcamps.map((bootcamp)=>(
                    <Bootcamp value={bootcamp} key={bootcamp._id}/>
                )
                )
            ):(<div>loading...</div>)
            }
        </Fragment>
    );
};

export default Bootcamps;