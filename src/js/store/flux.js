const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactos: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			crearAgenda: async() => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Martin",{
						method:"POST",
						headers:{"Content-Type":"application/json"}
					})
					const data = await response.json()
					console.log(data)
					return true
				} catch (error) {
					console.log(error)
					return false
				}
			},
	//https://playground.4geeks.com/contact/agendas/Martin/contacts		
			
	obtenerContactos: async() => {
		try {
			const response = await fetch("https://playground.4geeks.com/contact/agendas/Martin/contacts",{
				method:"GET",
				headers:{"Content-Type":"application/json"}
			})
			console.log(response)
			if(response.status == 404){
				getActions().crearAgenda()
			}
			const data = await response.json()
			console.log(data.contacts)
			setStore({contactos:data.contacts})
			return true
		} catch (error) {
			console.log(error)
			return false
		}
	},
		}
	};
};

export default getState;
