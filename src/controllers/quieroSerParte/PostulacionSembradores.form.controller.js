export default () => {
    const component = `
    <div class="postulacionSembradores">
        <div class="postulacionSembradores__modal">
            <div class="container">
                <div class="postulacionSembradores__modal__vendor">
                    <h2 class="postulacionSembradores__modal__vendor-titulo">¡Quiero ser parte!</h2>
                    <p class="postulacionSembradores__modal__vendor-texto">completa el formulario</p>
                </div>
                <form id="postulacionSembradores-formulario" class="postulacionSembradores__modal__formulario" method="POST">
                    <div id="postulacionSembradores__modal__formulario__grupo__postulacionNombreYApellido" class="postulacionSembradores__modal__formulario__grupo">
                        <label for="postulacionNombreYApellido"class="postulacionSembradores__modal__formulario__grupo-label">Nombre y apellido</label>
                        <div id="postulacionSembradores__modal__formulario__grupo__postulacionNombreYApellido" class="postulacionSembradores__modal__formulario__grupo__input">
                            <input type="text" 
                            id="postulacionNombreYApellido"
                            name="postulacionNombreYApellido"
                            class="postulacionSembradores__modal__formulario__grupo__input-input">
                            <i class="postulacionSembradores__modal__formulario__grupo__input-icono"></i>
                        </div>
                        <p class="postulacionSembradores__modal__formulario__grupo-error">Error notificacion</p>
                    </div>
                    <div class="contenedorPostulacion">
                        <div id="postulacionSembradores__modal__formulario__grupo__postulacionMail" class="postulacionSembradores__modal__formulario__grupo">
                            <label for="postulacionMail" class="postulacionSembradores__modal__formulario__grupo-label">Mail</label>
                            <div id="postulacionSembradores__modal__formulario__grupo__postulacionMail" class="postulacionSembradores__modal__formulario__grupo__input">
                                <input type="text" 
                                id="postulacionMail"
                                name="postulacionMail"
                                class="postulacionSembradores__modal__formulario__grupo__input-input">
                                <i class="postulacionSembradores__modal__formulario__grupo__input-icono  far fa-envelope"></i>
                            </div>
                            <p class="postulacionSembradores__modal__formulario__grupo-error">Error notificacion</p>
                        </div>
                        <div id="postulacionSembradores__modal__formulario__grupo__postulacionTelefono" class="postulacionSembradores__modal__formulario__grupo">
                            <label for="postulacionTelefono" class="postulacionSembradores__modal__formulario__grupo-label">Celular</label>
                            <div id="postulacionSembradores__modal__formulario__grupo__postulacionTelefono" class="postulacionSembradores__modal__formulario__grupo__input">
                                <input type="text" 
                                id="postulacionTelefono"
                                name="postulacionTelefono"
                                class="postulacionSembradores__modal__formulario__grupo__input-input">
                                <i class="postulacionSembradores__modal__formulario__grupo__input-icono"></i>
                            </div>
                            <p class="postulacionSembradores__modal__formulario__grupo-error">Error notificacion</p>
                        </div>
                    </div>
                    <div id="postulacionSembradores__modal__formulario__grupo__postulacionProvincia" class="postulacionSembradores__modal__formulario__grupo">
                        <label for="postulacionProvincia" class="postulacionSembradores__modal__formulario__grupo-label">¿Dónde vivís?</label>
                        <div id="postulacionSembradores__modal__formulario__grupo__postulacionProvincia" class="postulacionSembradores__modal__formulario__grupo__input">
                            <select required class="postulacionSembradores__modal__formulario__grupo__input-select" name="postulacionProvincia" id="postulacionProvincia">
                                <option disabled value="0">Elegí tu provincia</option>
                                <option value="1">CABA</option>
                                <option value="2">GBA Norte</option>
                                <option value="3">GBA Sur</option>
                                <option value="4">GBA Oeste</option>
                                <option value="5">Buenos Aires</option>
                                <option value="6">Catamarca</option>
                                <option value="7">Chaco</option>
                                <option value="8">Córdoba</option>
                                <option value="9">Corrientes</option>
                                <option value="10">Entre Ríos</option>
                                <option value="11">Formosa</option>
                                <option value="12">Jujuy</option>
                                <option value="13">La Pampa</option>
                                <option value="14">La Rioja</option>
                                <option value="15">Mendoza</option>
                                <option value="16">Misiones</option>
                                <option value="17">Neuquén</option>
                                <option value="18">Río Negro</option>
                                <option value="19">Salta</option>
                                <option value="20">San Juan</option>
                                <option value="21">San Luis</option>
                                <option value="22">Santa Cruz</option>
                                <option value="23">Santa Fe</option>
                                <option value="24">Santiago del Estero</option>
                                <option value="25">Tierra del Fuego, Antártida e Isla del Atlántico Sur</option>
                                <option value="26">Tucumán</option>
                            </select>
                        </div>
                        <p class="postulacionSembradores__modal__formulario__grupo-error">Error notificacion</p>
                    </div>
                    <div id="postulacionSembradores__modal__formulario__grupo__postulacionPosicion" class="postulacionSembradores__modal__formulario__grupo">
                        <label class="postulacionSembradores__modal__formulario__grupo-label">Me gustaría participar como:</label>
                        <div id="postulacionSembradores__modal__formulario__grupo__postulacionPosicion" class="postulacionSembradores__modal__formulario__grupo__input">
                            <label class="postulacionSembradores__modal__formulario__grupo__input-label" for="postulacionMentor">
                                <input required type="radio" name="postulacionPosicion" id="postulacionMentor">Mentor
                                <i class="fas fa-check-circle"></i>
                            </label>
                            <label class="postulacionSembradores__modal__formulario__grupo__input-label" for="postulacionDocente">
                                <input type="radio" name="postulacionPosicion" id="postulacionDocente">Docente
                                <i class="fas fa-check-circle"></i>
                            </label>
                            <label class="postulacionSembradores__modal__formulario__grupo__input-label" for="postulacionOtro">
                                <input type="radio" name="postulacionPosicion" id="postulacionOtro">Otro
                                <i class="fas fa-check-circle"></i>
                            </label>
                        </div> 
                        <p class="postulacionSembradores__modal__formulario__grupo-error">Error notificacion</p>
                    </div>
                    <div style="display:none;" id="postulacionSembradores__modal__formulario__grupo__postulacionOtro" class="postulacionSembradores__modal__formulario__grupo">
                        <label for="postulacionOtro" class="postulacionSembradores__modal__formulario__grupo-label">Otro</label>
                        <div id="postulacionSembradores__modal__formulario__grupo__postulacionOtro" class="postulacionSembradores__modal__formulario__grupo__input">
                            <input type="text" 
                            id="postulacionOtro"
                            name="postulacionOtro"
                            class="postulacionSembradores__modal__formulario__grupo__input-input">
                            <i class="postulacionSembradores__modal__formulario__grupo__input-icono"></i>
                        </div>
                        <p class="postulacionSembradores__modal__formulario__grupo-error">Error notificacion</p>
                    </div>
                    <div id="postulacionSembradores__modal__formulario__grupo__postulacionLinkedin" class="postulacionSembradores__modal__formulario__grupo">
                        <label for="postulacionLinkedin" class="postulacionSembradores__modal__formulario__grupo-label">Linkedin</label>
                        <div id="postulacionSembradores__modal__formulario__grupo__postulacionLinkedin" class="postulacionSembradores__modal__formulario__grupo__input">
                            <input type="text" 
                            id="postulacionLinkedin"
                            name="postulacionLinkedin"
                            class="postulacionSembradores__modal__formulario__grupo__input-input">
                            <i class="postulacionSembradores__modal__formulario__grupo__input-icono"></i>
                        </div>
                        <p class="postulacionSembradores__modal__formulario__grupo-error">Error notificacion</p>
                    </div>

                    <div class="postulacionSembradores__modal__formulario__grupo postulacionSembradores__modal__formulario__grupo__enviar">
                        <button
                        class="postulacionSembradores__modal__formulario__grupo__enviar-btn" 
                        type="submit">Enviar</button>
                        <p class="postulacionSembradores__modal__formulario__grupo__enviar-texto">Formulario enviado exitosamente</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
    `

    const divElement = document.createElement('div');
    divElement.innerHTML = component;

    const expresiones = {
        nombreApellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/,
        linkedin: /^[a-zA-Z0-9_.+-À-ÿ\s]{1,40}$/,
        otro: /^[a-zA-ZÀ-ÿ\s]{1,60}$/
    }

    const camposValidados = {
        postulacionNombreYApellido: false,
        postulacionMail: false,
        postulacionTelefono: false,
        postulacionLinkedin: false,
        postulacionOtro: false,
    }

    // Elementos del DOM

    const formulario = divElement.querySelector('#postulacionSembradores-formulario')

    const inputs = divElement.querySelectorAll('#postulacionSembradores-formulario input')
    const divOtroPostulacion = divElement.querySelector('#postulacionSembradores__modal__formulario__grupo__postulacionOtro')

    const postulacionOtroRadio = divElement.querySelector('#postulacionOtro')
    const postulacionMentorRadio = divElement.querySelector('#postulacionMentor')
    const postulacionDocenteRadio = divElement.querySelector('#postulacionDocente')


    const colocaroSacarInput = () => {
        if(postulacionOtroRadio.checked){
            divOtroPostulacion.style.display = "block"
        } else if (!postulacionOtroRadio.checked){
            divOtroPostulacion.style.display = "none"
        }
    }

    postulacionDocenteRadio.addEventListener('change', colocaroSacarInput)
    postulacionMentorRadio.addEventListener('change', colocaroSacarInput)
    postulacionOtroRadio.addEventListener('change', colocaroSacarInput)
    
    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "postulacionNombreYApellido":

                validarInputs(expresiones.nombreApellido, e.target, "postulacionNombreYApellido")

                break;
                 
            case "postulacionMail":

                validarInputs(expresiones.correo, e.target, "postulacionMail")    

                break;
                 
            case "postulacionTelefono":
                
                validarInputs(expresiones.telefono, e.target, "postulacionTelefono")    
                
                break;
                 
            case "postulacionLinkedin":
                validarInputs(expresiones.linkedin, e.target, "postulacionLinkedin")    

                break;

            case "postulacionOtro":
            validarInputs(expresiones.otro, e.target, "postulacionOtro")

                break;
        }
    }

    const validarInputs = (expresion, input, campo) => {
    
        if(expresion.test(input.value)){
    
            divElement.querySelector(`#postulacionSembradores__modal__formulario__grupo__${campo}`).classList.remove(`postulacionSembradores__modal__formulario__grupo__input-incorrecto`)
            divElement.querySelector(`#postulacionSembradores__modal__formulario__grupo__${campo}`).classList.add(`postulacionSembradores__modal__formulario__grupo__input-correcto`)
            divElement.querySelector(`#postulacionSembradores__modal__formulario__grupo__${campo} i`).classList.remove(`fa-times-circle`)
            divElement.querySelector(`#postulacionSembradores__modal__formulario__grupo__${campo} i`).classList.remove(`far`)
            divElement.querySelector(`#postulacionSembradores__modal__formulario__grupo__${campo} i`).classList.add(`fa-check-circle`)
            divElement.querySelector(`#postulacionSembradores__modal__formulario__grupo__${campo} i`).classList.add(`fas`)
            divElement.querySelector(`#postulacionSembradores__modal__formulario__grupo__${campo} p`).classList.remove(`postulacionSembradores__modal__formulario__grupo-error-activo`)
            camposValidados[campo]= true;
    
        } else {
    
            divElement.querySelector(`#postulacionSembradores__modal__formulario__grupo__${campo}`).classList.remove(`postulacionSembradores__modal__formulario__grupo__input-correcto`)
            divElement.querySelector(`#postulacionSembradores__modal__formulario__grupo__${campo}`).classList.add(`postulacionSembradores__modal__formulario__grupo__input-incorrecto`)
            divElement.querySelector(`#postulacionSembradores__modal__formulario__grupo__${campo} i`).classList.remove(`fa-check-circle`)
            divElement.querySelector(`#postulacionSembradores__modal__formulario__grupo__${campo} i`).classList.remove(`fas`)
            divElement.querySelector(`#postulacionSembradores__modal__formulario__grupo__${campo} i`).classList.add(`fa-times-circle`)
            divElement.querySelector(`#postulacionSembradores__modal__formulario__grupo__${campo} i`).classList.add(`far`)
            divElement.querySelector(`#postulacionSembradores__modal__formulario__grupo__${campo} p`).classList.add(`postulacionSembradores__modal__formulario__grupo-error-activo`)
            camposValidados[campo]= false;
    
        }
    
    }
    
    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario)
        input.addEventListener('blur', validarFormulario)
    })
    
    //Corresponde al formulario que está en el apartado de Contacto. Valida los inputs y le devuelve al usuario una respuesta en caso de que esté todo bien

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        if(camposValidados.postulacionLinkedin && camposValidados.postulacionMail && camposValidados.postulacionNombreYApellido && camposValidados.postulacionTelefono && camposValidados.postulacionOtro){
            formulario.reset();
            
            divElement.querySelector('.postulacionSembradores__modal__formulario__grupo__enviar-texto').classList.add('postulacionSembradores__modal__formulario__grupo__enviar-texto-satisfactorio');

            setTimeout(() => {
                divElement.querySelector('.postulacionSembradores__modal__formulario__grupo__enviar-texto').classList.remove('postulacionSembradores__modal__formulario__grupo__enviar-texto-satisfactorio');
            }, 5000);

            divElement.querySelectorAll(`.postulacionSembradores__modal__formulario__grupo__input-correcto`).forEach((inputs) => {
                inputs.classList.remove(`postulacionSembradores__modal__formulario__grupo__input-correcto`)
            })
            divElement.querySelectorAll(`.postulacionSembradores__modal__formulario__grupo__input i`).forEach((iconos) => {
                iconos.classList.remove(`fa-check-circle`)
            })
            
        }
    })

    return divElement
}