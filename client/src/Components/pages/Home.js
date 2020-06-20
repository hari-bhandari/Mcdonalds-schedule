import React,{useContext,useEffect} from 'react'
import Bootcamps from "../Bootcamps/Bootcamps";
import FindByDistance from "../Forms/FindByDistance";
import AuthContext from "../../context/auth/authContext";
import 'bootstrap/dist/css/bootstrap.min.css'


function Home() {
	const authContext=useContext(AuthContext);
	const{loadUser}=authContext;
	useEffect(()=>{
		loadUser();
	},[])
	return (
		<div>
			<section className="showcase">
				<div className="dark-overlay">
					<div className="showcase-inner container">
						<h1 className="display-4">Find a Code Bootcamp</h1>
						<p className="lead">
							Find, rate and read reviews on coding bootcamps
						</p>
					<FindByDistance/>

					</div>
				</div>
			</section>
		</div>
    )
}

export default Home
