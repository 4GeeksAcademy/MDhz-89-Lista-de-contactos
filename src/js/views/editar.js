import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { Context } from "../store/appContext";

const Editar = () => {
    const { id } = useParams(); // Obtiene el ID del contacto de la URL
    const { store, actions } = useContext(Context); 
    const navigate = useNavigate(); // Inicializa useNavigate

    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        // Busca el contacto por ID y llena los campos del formulario
        const contacto = store.contactos.find(contact => contact.id === parseInt(id));
        if (contacto) {
            setNombre(contacto.name);
            setDireccion(contacto.address);
            setTelefono(contacto.phone);
            setEmail(contacto.email);
        }
    }, [id, store.contactos]);

    const EditContact = async (e) => {
        e.preventDefault(); 
        
        // Llamar a la acción para editar el contacto
        const result = await actions.EditContact(id, nombre, telefono, direccion, email);
        if (result) {
            navigate('/demo'); // Redirigir a la lista de contactos después de editar
        } else {
            console.error("Error al editar el contacto");
        }
    };

    return (
        <div className="container">
            <h1 className="py-2">Editar Contacto</h1>
            <form onSubmit={EditContact}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input type="text" className="form-control" id="nombre"
                        value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono:</label>
                    <input type="text" className="form-control" id="telefono"
                        value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección:</label>
                    <input type="text" className="form-control" id="direccion"
                        value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Editar</button>
            </form>
        </div>
    );
};

export default Editar;

