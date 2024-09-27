import React,{useState} from "react"

const Agregar = () => {
    const[nombre,setNombre] = useState("")
    const[direccion,setDireccion] = useState("")
    const[telefono,setTelefono] = useState("")
    const[email,setEmail] = useState("")

    const crearContacto = async(e) =>{
        e.preventDefault()
        console.log(nombre,direccion,telefono,email)
    }

    return (
        <div className="container">
            <h1 className="py-2">agregar contactos</h1>

            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Nombre:</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    value={nombre} onChange={(e) => setNombre(e.target.value)} />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Telefono:</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" 
                    value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Direccion:</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    value={direccion} onChange={(e) => setDireccion(e.target.value)} />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Email:</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <button type="button" onClick={(e) => crearContacto(e)} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Agregar