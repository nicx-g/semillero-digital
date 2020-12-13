export default () => {
    const component = `
    <header>
        <nav class="navbarSemillero navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#"><img width="200px" height="auto" src="./src/resources/images/semillero_logo.png" alt="Logo de Semillero Digital"></a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#/cursos">Cursos</a>
                    </li>
                    <li class="nav-item active">
                       <a class="nav-link" href="#/testimonios">Testimonios</a>
                    </li>
                    <li class="nav-item active">
                     <a class="nav-link" href="#/quienes-somos">¿Quiénes somos?</a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link" href="#/blog">Blog</a>
                    </li>
                    <li class="mav-item active">
                        <a class="nav-link" href="#"><i class="fas fa-search"></i></a>
                    </li>
                    <li class="nav-item active">
                      <a class="nav-link" href="#/quiero-ser-parte">Quiero ser parte</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#/contacto">Contactanos</a>
                    </li>
                </ul>
            </div>
            <a class="navbar-toggler" href="#"><i class="fas fa-search"></i></a>
        </nav>
    </header>
    `

    const divElement = document.createElement('div');
    divElement.innerHTML = component;



    return divElement
}