import {router} from "../router/index.routes.js"; // Importo la función router que contiene los switch

router(window.location.hash) // Ejecuta la función con el path actual

window.addEventListener('hashchange', () => { // Tomo el evento del cambio del path y le pasa la función
    router(window.location.hash)
})