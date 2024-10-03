import React, { useState, useContext } from "react";
import { Context } from "../store/appContext"; // Asegúrate de que esta ruta sea correcta

const Agregar = () => {
    const { actions } = useContext(Context); // Obtener acciones del contexto
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");

    const crearContacto = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
        
        // Llamar a la acción para crear un contacto
        const result = await actions.crearContacto(nombre, telefono, direccion, email);
        
       
    };

    return (
        <div className="container">
            <h1 className="py-2">Agregar Contactos</h1>
            <form onSubmit={crearContacto}>
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
                    <input type="text" className="form-control" id="email"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
        </div>
    );
};

export default Agregar;
