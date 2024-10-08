import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Contactos</span>
			</Link>
			<div className="ml-auto mx-2">
				<Link to="/agregar">
					<button className="btn btn-outline-primary">agregar contactos</button>
				</Link>
			</div>
		</nav>
	);
};
