import Home from "../controllers/Home.controller.js";
import Contacto from '../controllers/Contacto.controller.js'

// Importamos todos los componentes con su lógica correspondiente

const root = document.getElementById('root') // selecciono el root en donde voy a colocar todo el html

const router = (route) => { // esta funcion va a hacer que dependiendo el hashtag de la url se cargue un componente y su respectiva lógica

    root.innerHTML = "" // Vacía el elemento para cargar las correspondientes secciones

    switch(route){ // coloca el componente en el root con el appendChild
        case '':{
            window.location.href = '#/home'
        }
        case '#/':{
            window.location.href = '#/home'
        }
        
        case '#/home':{
            return root.appendChild(Home())
        }
        case '#/contacto':{
            return root.appendChild(Contacto())
        }
    }
}

export {router} // Exporto la función al main.js