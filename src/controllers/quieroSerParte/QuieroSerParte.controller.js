import PostulacionSembradoresForm from '../quieroSerParte/PostulacionSembradores.form.controller.js'

export default () => {
    const component = `
    <div class="quieroSerParte">
        <div class="quieroSerParte__header">
            <div class="container">
                <div class="quieroSerParte__header__contenedor">
                    <div class="quieroSerParte__header__contenedor__vendor">
                        <h1 class="quieroSerParte__header__contenedor__vendor-titulo">¿Te sumás? Vení a sembrar</h1>
                        <p class="quieroSerParte__header__contenedor__vendor-texto">Somos una comunidad de desarrolladores voluntarios que brinda un programa de capacitaciones en oficios digitales y mentoreo laboral, a jóvenes en situación de pobreza económica.</p>
                        <p class="quieroSerParte__header__contenedor__vendor-texto">Constantemente buscamos personas que quieran sumarse a facilitar clases, mentorear estudiants y etc.</p>
                        <p class="quieroSerParte__header__contenedor__vendor-texto">Si te interesa el mundo digital y tenés ganas de dar un poco de tu tiempo, ¡sumate!</p>
                        <button id="quieroSumarme-btn" class="quieroSerParte__header__contenedor__vendor-btn">Quiero sumarme!</button>
                    </div>
                    <div class="quieroSerParte__header__contenedor__img">
                        <img class="quieroSerParte__header__contenedor__img-img" src="./src/resources/images/21.jpg" alt="Imagen de quieroSerParte">
                    </div>
                </div>
             </div>
        </div>
        <div class="quieroSerParte__sembradoresReview">
            <div class="container">
                <h2 class="quieroSerParte__sembradoresReview-titulo">Reviews de Sembradores</h2>
                <div class="quieroSerParte__sembradoresReview__contenedor">
                    <div class="quieroSerParte__sembradoresReview__contenedor__item">
                        <div class="quieroSerParte__sembradoresReview__contenedor__item__img">
                            <img class="img-fluid quieroSerParte__sembradoresReview__contenedor__item__img-img" src="./src/resources/images/review1.JPEG" alt="Foto de un sembrador">
                        </div>
                        <div class="quieroSerParte__sembradoresReview__contenedor__item__vendor">
                            <p class="quieroSerParte__sembradoresReview__contenedor__item__vendor-texto">"Participar de este proyecto me emociona sólo al escribirlo. Me hace feliz ver cuando los alumnos se comprometen con su aprendizaje, cuando descubren que aprenden, que pueden, y que les encanta hacerlo! Semillero es el lugar en el que hoy debo estar"</p>
                            <h3 class="quieroSerParte__sembradoresReview__contenedor__item__vendor-titulo">Diego Lema</h3>
                        </div>
                    </div>
                    <div class="quieroSerParte__sembradoresReview__contenedor__item">
                        <div class="quieroSerParte__sembradoresReview__contenedor__item__img">
                            <img class="img-fluid quieroSerParte__sembradoresReview__contenedor__item__img-img" src="./src/resources/images/review2.JPEG" alt="Foto de un sembrador">
                        </div>
                        <div class="quieroSerParte__sembradoresReview__contenedor__item__vendor">
                            <p class="quieroSerParte__sembradoresReview__contenedor__item__vendor-texto">"Es la posibilidad de devolver un poquito de las posibilidades que la vida me dio, y de recibir a cambio de eso un cariño enorme y unas ganas increíbles de aprender y superarse del otro lado."</p>
                            <h3 class="quieroSerParte__sembradoresReview__contenedor__item__vendor-titulo">Fede Navarro</h3>
                        </div>
                    </div>
                    <div class="quieroSerParte__sembradoresReview__contenedor__item">
                        <div class="quieroSerParte__sembradoresReview__contenedor__item__img">
                            <img class="img-fluid quieroSerParte__sembradoresReview__contenedor__item__img-img" src="./src/resources/images/review3.JPEG" alt="Foto de un sembrador">
                        </div>
                        <div class="quieroSerParte__sembradoresReview__contenedor__item__vendor">
                            <p class="quieroSerParte__sembradoresReview__contenedor__item__vendor-texto">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rem repellendus quisquam vel, fugit sunt libero iure nemo est. Nisi nemo facilis velit placeat minus repudiandae, aliquam illum ipsam cum?"</p>
                            <h3 class="quieroSerParte__sembradoresReview__contenedor__item__vendor-titulo">Lorem Ipsum</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="overlayModal" class="quieroSerParte__overlay" style="display:none;">
            <div id="root-wrapper-form" class="root-form">
                <i class="cerrarModal fas fa-times"></i>
                <div id="root-form"></div>
            </div>
        </div>
    </div>
    `

    const divElement = document.createElement('div');
    divElement.innerHTML = component;

    // Código js

    // Elementos del DOM

    const button = divElement.querySelector('#quieroSumarme-btn');
    const cerrarModal = divElement.querySelector('.cerrarModal')
    const overlayModal = divElement.querySelector('#overlayModal')
    const rootForm = divElement.querySelector('#root-form');

    const mql = matchMedia('(min-width: 900px)');

    const applyMatchMedia = mql => {
    if (mql.matches){
        // Si el ancho es mayor a 900px

        button.addEventListener('click', () => {
            
            overlayModal.style.display = "block";
            rootForm.innerHTML = ``;
            rootForm.appendChild(PostulacionSembradoresForm());
        })

        cerrarModal.addEventListener('click', () => {
            debugger
            rootForm.innerHTML = '';
            overlayModal.style.display = "none";
        })

    } else{
        // Si el ancho es menor a 900px

        button.addEventListener('click', () => {
            window.location.href = "#/quiero-ser-parte/formulario"
        })
    }

    addEventListener('resize', () => applyMatchMedia(mql))
    }

    $(() => {

    applyMatchMedia(mql)

    })

    return divElement
}