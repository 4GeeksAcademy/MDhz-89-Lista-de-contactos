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


			//https://playground.4geeks.com/contact/agendas/Martin/contacts		

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
			removerContactos: (indexToDelete) => {
				console.log("flux" + indexToDelete)
				const store = getStore();
				//store.contacts = []

				const requestOptions = {
					method: "DELETE",
					redirect: "follow"
				  };
				  
				  fetch("https://playground.4geeks.com/contact/agendas/Martin/contacts/"+ indexToDelete, requestOptions)
					.then((response) => response.text())
					.then((result) => console.log(result))

				
				//setStore({ contactos: store.contactos.filter( (contacto,index)=> contacto.id != indexToDelete) });
			},
		}
	};
};

export default getState;