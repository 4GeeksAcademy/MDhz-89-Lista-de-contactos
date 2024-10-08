import Agregar from "../views/agregar";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		key: "",
		store: {
			contactos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			crearAgenda: async () => {
				console.log()
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Martin", {
						method: "POST",
						headers: { "Content-Type": "application/json" }
					})
					const data = await response.json()
					console.log(data)
					return true
				} catch (error) {
					console.log(error)
					return false
				}
			},
			crearContacto: async (nombre, telefono, direccion, email) => {
				console.log(nombre, telefono, direccion, email)
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Martin/contacts", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							"name": nombre,
							"phone": telefono,
							"email": email,
							"address": direccion,
						})
					})

				} catch (error) {

					return false
				}
			},
			EditContact: async (idToEdit, nombre, telefono, direccion, email) => {
				console.log(nombre, telefono, direccion, email);
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/Martin/contacts/${idToEdit}`, {
						method: "PUT",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							"name": nombre,
							"phone": telefono,
							"email": email,
							"address": direccion,
						})
					});
					
					if (!response.ok) {
						throw new Error("Error al editar el contacto");
					}
					
					return true; 
				} catch (error) {
					console.error("Error:", error);
					return false; 
				}
			},
			


			

			obtenerContactos: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Martin/contacts", {
						method: "GET",
						headers: { "Content-Type": "application/json" }
					})
					console.log(response)
					if (response.status == 404) {
						getActions().crearAgenda()
					}
					const data = await response.json()
					console.log(data.contacts)
					setStore({ contactos: data.contacts })
					return true
				} catch (error) {
					console.log(error)
					return false
				}
			},
			removerContactos: (idToDelete) => {
				console.log("Eliminar contacto con ID: " + idToDelete);
				const store = getStore();
			
				const requestOptions = {
					method: "DELETE",
					redirect: "follow",
				};
			
				fetch(`https://playground.4geeks.com/contact/agendas/Martin/contacts/${idToDelete}`, requestOptions)
					.then((response) => {
						if (!response.ok) {
							throw new Error("Error al eliminar el contacto");
						}
						
						const updatedContacts = store.contactos.filter((contacto) => contacto.id !== idToDelete);
						setStore({ contactos: updatedContacts }); // Actualiza el estado
					})
					.catch((error) => {
						console.error("Error:", error);
					});
			
			

				
				
			},
		}
	};
};

export default getState;