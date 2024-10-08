import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom"; // Importa Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.obtenerContactos();
    }, []);

    return (
        <div className="container">
            <ul className="list-group">
                {store.contactos.map((item) => {
                    return (
                        <li key={item.id} className="list-group-item d-flex justify-content-between">
                            <div>
                                <img src="https://imgs.search.brave.com/SzTTm6v9MXHV_8pbWKpqoOwEIoixZuVChMlNTo12cjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9nMGJ5ODFjWFpq/NUdJeHcyMVIxa1Ny/UDBKWHRsUWhHaWgw/OEJWYVJpQVY0eUhK/Qm16YmFzMzRtY1ct/cllBckwydUpZPXcy/NDAtaDQ4MC1ydw" className="img-fluid" alt="..." />
                                <h1 className="">{item.name}</h1>
                                <p className=""><FontAwesomeIcon icon={faPhone} /> {item.phone} </p>
                                <p className=""><FontAwesomeIcon icon={faEnvelope} /> {item.email} </p>
                                <p className=""><FontAwesomeIcon icon={faLocationPin} /> {item.address} </p>
                            </div>
                            <div>
                                <button onClick={() => actions.removerContactos(item.id)}>Eliminar</button>
                                <Link to={`/editar/${item.id}`} className="btn btn-primary">Editar</Link> {/* Botón para editar */}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
