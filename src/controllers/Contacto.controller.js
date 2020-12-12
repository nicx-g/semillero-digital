export default () => {
    const component = `
    <div class="contacto">
        <div class="container">
            <div class="contacto__redesSociales">
                <h1 class="contacto__redesSociales-titulo">Contactanos</h1>
                <div class="contacto__redesSociales__contenedor">
                    <div class="contacto__redesSociales__contenedor__grupo">
                        <div class="contacto__redesSociales__contenedor__grupo__item">
                            <i class="contacto__redesSociales__contenedor__grupo__item-icono far fa-envelope"></i>
                            <a href="#" class="contacto__redesSociales__contenedor__grupo__item-texto">Texto</a>
                        </div>
                        <div class="contacto__redesSociales__contenedor__grupo__item">
                            <i class="contacto__redesSociales__contenedor__grupo__item-icono fab fa-facebook-f"></i>
                            <a href="#" class="contacto__redesSociales__contenedor__grupo__item-texto">sitio web</a>
                        </div>
                        <div class="contacto__redesSociales__contenedor__grupo__item">
                            <i class="contacto__redesSociales__contenedor__grupo__item-icono fab fa-instagram"></i>
                            <a href="#" class="contacto__redesSociales__contenedor__grupo__item-texto">sitio web</a>
                        </div>
                        <div class="contacto__redesSociales__contenedor__grupo__item">
                            <i class="contacto__redesSociales__contenedor__grupo__item-icono fab fa-linkedin-in"></i>
                            <a href="#" class="contacto__redesSociales__contenedor__grupo__item-texto">sitio web</a>
                        </div>
                        <div class="contacto__redesSociales__contenedor__grupo__item">
                            <i class="contacto__redesSociales__contenedor__grupo__item-icono fab fa-whatsapp"></i>
                            <a href="#" class="contacto__redesSociales__contenedor__grupo__item-texto">numero</a>
                        </div>
                    </div>
                    <div class="contacto__redesSociales__contenedor__img">
                        <img class="contacto__redesSociales__contenedor__img-img img-fluid" src="https://via.placeholder.com/250x200" alt="Descripción a definir">
                    </div>
                </div>
            </div>
        </div>
            <div class="contacto__dudas">
                <div class="container">
                    <div class="contacto__dudas__vendor">
                        <h2 class="contacto__dudas__vendor-titulo">¿Tenes dudas?</h2>
                        <p class="contacto__dudas__vendor-texto">Dejanos tu mensaje y nos contactaremos con vos</p>
                    </div>
                    <form id="contacto-formulario" class="contacto__dudas__formulario" method="POST">
                        <div>
                            <div id="contacto__dudas__formulario__grupo__contactoNombreYApellido" class="contacto__dudas__formulario__grupo">
                                <label for="contactoNombreyApellido"class="contacto__dudas__formulario__grupo-label">Nombre y apellido</label>
                                <div id="contacto__dudas__formulario__grupo__contactoNombreYApellido" class="contacto__dudas__formulario__grupo__input">
                                    <input type="text" 
                                    id="contactoNombreyApellido"
                                    name="contactoNombreyApellido"
                                    class="contacto__dudas__formulario__grupo__input-input">
                                    <i class="contacto__dudas__formulario__grupo__input-icono"></i>
                                </div>
                                <p class="contacto__dudas__formulario__grupo-error">Error notificacion</p>
                            </div>
                            <div id="contacto__dudas__formulario__grupo__contactoMail" class="contacto__dudas__formulario__grupo">
                                <label for="contactoMail" class="contacto__dudas__formulario__grupo-label">Mail</label>
                                <div id="contacto__dudas__formulario__grupo__contactoMail" class="contacto__dudas__formulario__grupo__input">
                                    <input type="text" 
                                    id="contactoMail"
                                    name="contactoMail"
                                    class="contacto__dudas__formulario__grupo__input-input">
                                    <i class="contacto__dudas__formulario__grupo__input-icono  far fa-envelope"></i>
                                </div>
                                <p class="contacto__dudas__formulario__grupo-error">Error notificacion</p>
                            </div>
                            <div id="contacto__dudas__formulario__grupo__contactoTelefono" class="contacto__dudas__formulario__grupo">
                                <label for="contactoTelefono" class="contacto__dudas__formulario__grupo-label">Celular</label>
                                <div id="contacto__dudas__formulario__grupo__contactoTelefono" class="contacto__dudas__formulario__grupo__input">
                                    <input type="text" 
                                    id="contactoTelefono"
                                    name="contactoTelefono"
                                    class="contacto__dudas__formulario__grupo__input-input">
                                    <i class="contacto__dudas__formulario__grupo__input-icono"></i>
                                </div>
                                <p class="contacto__dudas__formulario__grupo-error">Error notificacion</p>
                            </div>
                        </div>
                        <div>
                            <div id="contacto__dudas__formulario__grupo__contactoMensaje" class="contacto__dudas__formulario__grupo">
                                <label for="contactoMensaje" class="contacto__dudas__formulario__grupo-label">Mensaje</label>
                                <div id="contacto__dudas__formulario__grupo__contactoMensaje" class="contacto__dudas__formulario__grupo__input">
                                    <textarea name="contactoMensaje" 
                                    id="contactoMensaje"
                                    rows="4"
                                    class="contacto__dudas__formulario__grupo__input-textarea"></textarea>
                                    <i class="contacto__dudas__formulario__grupo__input-icono-textarea"></i>
                                </div>
                                <p class="contacto__dudas__formulario__grupo-error">Error notificacion</p>
                            </div>
                            <div class="contacto__dudas__formulario__grupo contacto__dudas__formulario__grupo__enviar">
                                <button
                                class="contacto__dudas__formulario__grupo__enviar-btn" 
                                type="submit">Enviar</button>
                                <p class="contacto__dudas__formulario__grupo__enviar-texto">Formulario enviado exitosamente</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="contacto__newsletter">
            <div class="container">
                <div class="contacto__newsletter__contenedor">
                    <div class="contacto__newsletter__contenedor__vendor">
                        <h2 class="contacto__newsletter__contenedor__vendor-titulo">Suscribite al Newsletter</h2>
                        <p class="contacto__newsletter__contenedor__vendor-texto">Para enterarte de las últimas novedades</p>
                    </div>
                    <form id="formularioNewsletter" class="contacto__newsletter__contenedor__form" method="POST">
                        <div class="contacto__newsletter__contenedor__form__input">
                            <input
                            required 
                            class="contacto__newsletter__contenedor__form__input-input"
                            type="email">
                            <i class="contacto__newsletter__contenedor__form__input-icono far fa-envelope"></i>
                        </div>
                        <div class="contacto__newsletter__contenedor__form__btn">
                            <button class="contacto__newsletter__contenedor__form__btn-btn" type="submit">Enviar</button>
                            <p class="contacto__newsletter__contenedor__form__btn-satisfactorio">¡Suscrito! ¡Muchas gracias!</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `

    const divElement = document.createElement('div');
    divElement.innerHTML = component;

    //Expresiones regulares
    
    const expresiones = {
        nombreApellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/,
        mensaje: /^[a-zA-Z0-9À-ÿ\s]{1,1000}$/
    }

    const camposValidados = {
        contactoNombreYApellido: false,
        contactoMail: false,
        contactoTelefono: false,
        contactoMensaje: false,
    }

    // Elementos del DOM

    const formulario = divElement.querySelector('#contacto-formulario')
    const formularioNewsletter = divElement.querySelector('#formularioNewsletter')

    const inputs = divElement.querySelectorAll('#contacto-formulario input')
    const textareas = divElement.querySelectorAll('#contacto-formulario textarea')


    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "contactoNombreyApellido":

                validarInputs(expresiones.nombreApellido, e.target, "contactoNombreYApellido")

                break;
                 
            case "contactoMail":

                validarInputs(expresiones.correo, e.target, "contactoMail")    

                break;
                 
            case "contactoTelefono":
                
                validarInputs(expresiones.telefono, e.target, "contactoTelefono")    
                
                break;
                 
            case "contactoMensaje":
                validarInputs(expresiones.mensaje, e.target, "contactoMensaje")    

                break;
                 
        }
    }

    const validarInputs = (expresion, input, campo) => {
    
        if(expresion.test(input.value)){
    
            divElement.querySelector(`#contacto__dudas__formulario__grupo__${campo}`).classList.remove(`contacto__dudas__formulario__grupo__input-incorrecto`)
            divElement.querySelector(`#contacto__dudas__formulario__grupo__${campo}`).classList.add(`contacto__dudas__formulario__grupo__input-correcto`)
            divElement.querySelector(`#contacto__dudas__formulario__grupo__${campo} i`).classList.remove(`fa-times-circle`)
            divElement.querySelector(`#contacto__dudas__formulario__grupo__${campo} i`).classList.remove(`far`)
            divElement.querySelector(`#contacto__dudas__formulario__grupo__${campo} i`).classList.add(`fa-check-circle`)
            divElement.querySelector(`#contacto__dudas__formulario__grupo__${campo} i`).classList.add(`fas`)
            divElement.querySelector(`#contacto__dudas__formulario__grupo__${campo} p`).classList.remove(`contacto__dudas__formulario__grupo-error-activo`)
            camposValidados[campo]= true;
    
        } else {
    
            divElement.querySelector(`#contacto__dudas__formulario__grupo__${campo}`).classList.remove(`contacto__dudas__formulario__grupo__input-correcto`)
            divElement.querySelector(`#contacto__dudas__formulario__grupo__${campo}`).classList.add(`contacto__dudas__formulario__grupo__input-incorrecto`)
            divElement.querySelector(`#contacto__dudas__formulario__grupo__${campo} i`).classList.remove(`fa-check-circle`)
            divElement.querySelector(`#contacto__dudas__formulario__grupo__${campo} i`).classList.remove(`fas`)
            divElement.querySelector(`#contacto__dudas__formulario__grupo__${campo} i`).classList.add(`fa-times-circle`)
            divElement.querySelector(`#contacto__dudas__formulario__grupo__${campo} i`).classList.add(`far`)
            divElement.querySelector(`#contacto__dudas__formulario__grupo__${campo} p`).classList.add(`contacto__dudas__formulario__grupo-error-activo`)
            camposValidados[campo]= false;
    
        }
    
    }
    
    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario)
        input.addEventListener('blur', validarFormulario)
    })
    textareas.forEach((textarea) => {
        textarea.addEventListener('keyup', validarFormulario)
        textarea.addEventListener('blur', validarFormulario)
    })
    
    //Corresponde al formulario que está en el apartado de Newsletter y le devuelve al usuario una respuesta
    
    formularioNewsletter.addEventListener('submit', (e) => {
        e.preventDefault();
        formularioNewsletter.reset();
        divElement.querySelector('.contacto__newsletter__contenedor__form__btn-satisfactorio').style.display = "block";

        setTimeout(() => {
            divElement.querySelector('.contacto__newsletter__contenedor__form__btn-satisfactorio').style.display = "none";
        }, 5000)
    })
    
    //Corresponde al formulario que está en el apartado de Contacto. Valida los inputs y le devuelve al usuario una respuesta en caso de que esté todo bien

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        if(camposValidados.contactoMail && camposValidados.contactoMensaje && camposValidados.contactoNombreYApellido && camposValidados.contactoTelefono){
            formulario.reset();
            
            divElement.querySelector('.contacto__dudas__formulario__grupo__enviar-texto').classList.add('contacto__dudas__formulario__grupo__enviar-texto-satisfactorio');

            setTimeout(() => {
                divElement.querySelector('.contacto__dudas__formulario__grupo__enviar-texto').classList.remove('contacto__dudas__formulario__grupo__enviar-texto-satisfactorio');
            }, 5000);

            divElement.querySelectorAll(`.contacto__dudas__formulario__grupo__input-correcto`).forEach((inputs) => {
                inputs.classList.remove(`contacto__dudas__formulario__grupo__input-correcto`)
            })
            divElement.querySelectorAll(`.contacto__dudas__formulario__grupo__input i`).forEach((iconos) => {
                iconos.classList.remove(`fa-check-circle`)
            })
            
        }
    })

    return divElement
}