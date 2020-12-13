export default () => {
    const component = `
    <div class="cursos">
        <div class="container-fluid">
            <div class="cursos__contenedor">
                <div class="cursos__contenedor__vendor">
                    <h1 class="cursos__contenedor__vendor-titulo">Cursos</h1>
                </div>
                <div class="cursos__contenedor__cursos">
                    <div class="cursos__contenedor__cursos__item">
                        <div class="cursos__contenedor__cursos__item__img">
                            <img class="img-fluid cursos__contenedor__cursos__item__img-img" src="https://via.placeholder.com/300x300" alt="Imagenes de cursos">
                        </div>
                        <div class="cursos__contenedor__cursos__item__vendor">
                            <h1 class="cursos__contenedor__cursos__item__vendor-titulo">Potenciá tus proyectos con Facebook e Instagram</h1>
                            <p class="cursos__contenedor__cursos__item__vendor-texto">En este curso los alumnos podrán adquirir los conocimientos y las competencias necesarias para desempeñarse como Community Manager, con foco en la principal red social y con mayor potencial, que es actualmente Instagram.</p>
                            <div class="cursos__contenedor__cursos__item__vendor__links">
                                <a class="cursos__contenedor__cursos__item__vendor__links-programa" href="#" target="_blank">Descargar programa</a>
                                <a class="cursos__contenedor__cursos__item__vendor__links-testimonio" href="#">Testimonios</a>
                            </div>
                        </div>
                    </div>
                    <div class="cursos__contenedor__cursos__item par">
                        <div class="cursos__contenedor__cursos__item__img">
                            <img class="img-fluid cursos__contenedor__cursos__item__img-img" src="https://via.placeholder.com/300x300" alt="Imagenes de cursos">
                        </div>
                        <div class="cursos__contenedor__cursos__item__vendor">
                            <h1 class="cursos__contenedor__cursos__item__vendor-titulo">Aprende a hacer publicidad en Google</h1>
                            <p class="cursos__contenedor__cursos__item__vendor-texto">En este curso los alumnos podrán adquirir los conocimientos y las competencias necesarias para desempeñarse como implementadores de anuncios Google Ads. Al finalizar el curso los alumnos serán capaces de: <br>
                            Planificar una campaña de anuncios en el motor de búsqueda de Google utilizando las herramientas de Google Ads. <br>
                            Redactar e implementar anuncios efectivos, para lograr una campaña de alto rendimiento. <br>
                            Manejar presupuesto para campaña y optimizar su rendimiento en base a resultados. <br>
                            Traccionar visitas, generar ventas o consultas en un sitio web a través de Google Ads.
                            </p>
                            <div class="cursos__contenedor__cursos__item__vendor__links">
                                <a class="cursos__contenedor__cursos__item__vendor__links-programa" href="#" target="_blank">Descargar programa</a>
                                <a class="cursos__contenedor__cursos__item__vendor__links-testimonio" href="#">Testimonios</a>
                            </div>
                        </div>
                    </div>
                    <div class="cursos__contenedor__cursos__item">
                        <div class="cursos__contenedor__cursos__item__img">
                            <img class="img-fluid cursos__contenedor__cursos__item__img-img" src="https://via.placeholder.com/300x300" alt="Imagenes de cursos">
                        </div>
                        <div class="cursos__contenedor__cursos__item__vendor">
                            <h1 class="cursos__contenedor__cursos__item__vendor-titulo">Vendé en Mercado Libre como un profesional</h1>
                            <p class="cursos__contenedor__cursos__item__vendor-texto">En este curso los alumnos podrán adquirir los conocimientos y las competencias necesarias para desempeñarse como Asistente de Ventas para empresas que vendan sus productos o servicios a través de Mercado Libre. <br>
                            Al finalizar el curso los alumnos serán capaces de: <br>
                              El objetivo de este curso es maximizar el uso de la plataforma de Mercado Libre para obtener mejores resultados en las ventas. <br>
                              Realizar las acciones necesarias para la publicación y venta de productos de forma efectiva. <br>
                              Realizar análisis de oportunidades.</p>
                            <div class="cursos__contenedor__cursos__item__vendor__links">
                                <a class="cursos__contenedor__cursos__item__vendor__links-programa" href="#" target="_blank">Descargar programa</a>
                                <a class="cursos__contenedor__cursos__item__vendor__links-testimonio" href="#">Testimonios</a>
                            </div>
                        </div>
                    </div>
                    <div class="cursos__contenedor__cursos__item par">
                        <div class="cursos__contenedor__cursos__item__img">
                            <img class="img-fluid cursos__contenedor__cursos__item__img-img" src="https://via.placeholder.com/300x300" alt="Imagenes de cursos">
                        </div>
                        <div class="cursos__contenedor__cursos__item__vendor">
                            <h1 class="cursos__contenedor__cursos__item__vendor-titulo">Construcción y gestión de un sitio web</h1>
                            <p class="cursos__contenedor__cursos__item__vendor-texto">En este curso los alumnos podrán adquirir los conocimientos y las competencias necesarias para desempeñarse como Community Manager, con foco en la principal red social y con mayor potencial, que es actualmente Instagram.</p>
                            <div class="cursos__contenedor__cursos__item__vendor__links">
                                <a class="cursos__contenedor__cursos__item__vendor__links-programa" href="#" target="_blank">Descargar programa</a>
                                <a class="cursos__contenedor__cursos__item__vendor__links-testimonio" href="#">Testimonios</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

    const divElement = document.createElement('div');
    divElement.innerHTML = component;



    return divElement
}