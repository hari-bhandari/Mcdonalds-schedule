import React,{useState,useContext,useEffect} from 'react'
import AuthContext from '../../context/auth/authContext'
import AlertContext from "../../context/alert/AlertContext";
function Login(props) {
	const [login,setLogin]=useState({email:'',password:''})
	const authContext=useContext(AuthContext);
	const{loadUser}=authContext;
	const alertContext= useContext(AlertContext);
	const {setAlert}=alertContext;
	const {getUserLoggedIn,isAuthenticated,error,clearErrors}=authContext;
	const {email,password}=login
	const onSubmit=(e)=>{
		e.preventDefault();
		if(error!==null){
			setAlert(error,'danger')
		}
		getUserLoggedIn({email,password});
	}
	const onChange=(e)=>{
			setLogin({...login,[e.target.name]:e.target.value})
	}
	useEffect(()=>{
		loadUser()
	},[])
	useEffect(()=>{
		if(isAuthenticated){
			props.history.push('/');
			}
		// eslint-disable-next
	},[error,isAuthenticated,props.history])
	return (
		<section className="form mt-5">
			<div className="container">
				<div className="row">
					<div className="col-md-6 m-auto">
						<div className="card bg-white p-4 mb-4">
							<div className="card-body">
								<h1><i className="fas fa-sign-in-alt"></i> Login</h1>
								<p>
									Log in to list your bootcamp or rate, review and favorite
									bootcamps
								</p>
								<form onSubmit={onSubmit}>
									<div className="form-group">
										<label htmlFor="email">Email Address</label>
										<input
											type="email"
											name="email"
											className="form-control"
											placeholder="Enter email"
											onChange={onChange}
											required
										/>
									</div>
									<div className="form-group mb-4">
										<label htmlFor="password">Password</label>
										<input
											type="password"
											name="password"
											className="form-control"
											placeholder="Enter password"
											onChange={onChange}
											required
										/>
									</div>
									<div className="form-group">
										<input
											type="submit"
											value="Login"
											className="btn btn-primary btn-block"
										/>
									</div>
								</form>
								<p> Forgot Password? <a href="reset-password.html">Reset
									Password</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default Login
