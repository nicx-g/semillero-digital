import Home from "../controllers/Home.controller.js";
import Contacto from '../controllers/Contacto.controller.js'
import PostulacionSembradoresForm from '../controllers/quieroSerParte/PostulacionSembradores.form.controller.js'
import QuieroSerParte from '../controllers/quieroSerParte/QuieroSerParte.controller.js'
import Newsletter from '../controllers/global/Newsletter.controller.js'
import Blog from '../controllers/Blog.controller.js'
import Cursos from '../controllers/Cursos.controller.js'
import NavBar from '../controllers/global/Nav.controller.js'

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
            return (
                root.appendChild(NavBar()),
                root.appendChild(Home()),
                root.appendChild(Newsletter())
             )
        }

        case '#/contacto':{
            return (
                root.appendChild(NavBar()),
                root.appendChild(Contacto()),
                root.appendChild(Newsletter())
            )
            
        }
        
        case '#/blog':{
            return (
                root.appendChild(NavBar()),
                root.appendChild(Blog()),
                root.appendChild(Newsletter())
            )
        }
        case '#/cursos':{
            return (
                root.appendChild(NavBar()),
                root.appendChild(Cursos()),
                root.appendChild(Newsletter())
             )
        }

        case '#/quiero-ser-parte':{
            return (
                root.appendChild(NavBar()),
                root.appendChild(QuieroSerParte()),
                root.appendChild(Newsletter())
            )
        }

        case '#/quiero-ser-parte/formulario':{
            return (
                root.appendChild(PostulacionSembradoresForm()),
                root.appendChild(Newsletter())
                )
        }
    }
}

export {router} // Exporto la función al main.js