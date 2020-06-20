import React,{useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import AuthContext from "../../context/auth/authContext";


const Navbar = () => {
	const authContext = useContext(AuthContext);
	const {isAuthenticated,logout} = authContext;

	const guestLinks = (
		<div>
			<nav className="navbar navbar-expand-md navbar-dark bg-success fixed-top">
				<div className="container">
					<Link className="navbar-brand" to={'/'}
					><i className="fas fa-laptop-code"/> DevCamper</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link className="nav-link" to="login"
								><i className="fas fa-sign-in-alt"></i> Login</Link
								>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="register"
								><i className="fas fa-user-plus"></i> Register</Link
								>
							</li>
							<li className="nav-item d-none d-sm-block">
								<a className="nav-link" href="#">|</a>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={'/bootcamps'}>Browse Bootcamps</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
	const authLinks=(
		<div>
			<nav className="navbar navbar-expand-md navbar-dark bg-success">
				<div className="container">
					<Link className="navbar-brand" to={'/'}>
						<i className="fas fa-laptop-code"/> DevCamper</Link
					>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
								>
									<i className="fas fa-user"></i> Account
								</a>
								<div className="dropdown-menu">
									<Link className="dropdown-item" to="manage-bootcamp"
									>Manage Bootcamp</Link
									>
									<Link className="dropdown-item" to="manage-reviews"
									>Manage Reviews</Link
									>
									<Link className="dropdown-item" to="manage-account"
									>Manage Account</Link
									>
									<div className="dropdown-divider"></div>
									<Link onClick={()=>{
										logout()
									}} className="dropdown-item" to="login"
									><i className="fas fa-sign-out-alt"></i>Logout</Link
									>
								</div>
							</li>
							<li className="nav-item d-none d-sm-block">
								<a className="nav-link" href="#">     |     </a>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="bootcamps">Browse Bootcamps</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
    return (
    	<div>
		{isAuthenticated?authLinks:guestLinks}
		</div>
		)
}

export default Navbar

