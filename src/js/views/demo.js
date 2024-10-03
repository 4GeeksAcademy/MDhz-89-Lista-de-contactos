import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	function deleteContact (indexToDelete){
		console.log("deleteContact"+ indexToDelete)
	}

	useEffect(() =>{
		actions.obtenerContactos()
	},[])

	return (
		<div className="container">
			<ul className="list-group">
				{store.contactos.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							>
								<div >
									<p className="">{item.name} </p>
									<p className="">{item.phone} </p>
									<p className="">{item.email} </p>
									<p className="">{item.adress} </p>
									
									
								</div>
								<button onClick={()=>actions.removerContactos(item.id)}>Elimiar</button>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};