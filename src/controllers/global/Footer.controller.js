export default () => {
    const component = `
    <footer class="footerSemillero">
        <div class="container">
            <div class="footerSemillero__contenedor">
                <div class="footerSemillero__contenedor__links">
                    <div class="footerSemillero__contenedor__links">
                        <nav class="footerSemillero__contenedor__links__nav">
                            <ul class="footerSemillero__contenedor__links__nav__ul">
                                <li class="footerSemillero__contenedor__links__nav__ul__li">
                                    <a class="footerSemillero__contenedor__links__nav__ul__li-a" href="#">Cursos</a>
                                </li>
                                <li class="footerSemillero__contenedor__links__nav__ul__li">
                                    <a class="footerSemillero__contenedor__links__nav__ul__li-a" href="#">Testimonios</a>
                                </li>
                                <li class="footerSemillero__contenedor__links__nav__ul__li">
                                    <a class="footerSemillero__contenedor__links__nav__ul__li-a" href="#">¿Quiénes somos?</a>
                                </li>
                                <li class="footerSemillero__contenedor__links__nav__ul__li">
                                    <a class="footerSemillero__contenedor__links__nav__ul__li-a" href="#">Quiero ser parte</a>
                                </li>
                                <li class="footerSemillero__contenedor__links__nav__ul__li">
                                    <a class="footerSemillero__contenedor__links__nav__ul__li-a" href="#">Blog</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="footerSemillero__contenedor__socialMedia">
                        <a class="footerSemillero__contenedor__socialMedia__link" href="#"><i class="fab fa-facebook-f"></i></a>
                        <a class="footerSemillero__contenedor__socialMedia__link" href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a class="footerSemillero__contenedor__socialMedia__link" href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="footerSemillero__copyright">
                <div class="footerSemillero__copyright__vendor">
                    <p class="footerSemillero__copyright__vendor-texto">©2020 Semillero Digital</p>
                </div>
            </div>
        </div>
    </footer>
    `

    const divElement = document.createElement('div');
    divElement.innerHTML = component;



    return divElement
}