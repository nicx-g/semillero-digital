export default () => {
    const component = `
    <div class="newsletter">
            <div class="container">
                <div class="newsletter__contenedor">
                    <div class="newsletter__contenedor__vendor">
                        <h2 class="newsletter__contenedor__vendor-titulo">Suscribite al Newsletter</h2>
                        <p class="newsletter__contenedor__vendor-texto">Para enterarte de las últimas novedades</p>
                    </div>
                    <form id="formularioNewsletter" class="newsletter__contenedor__form" method="POST">
                        <div class="newsletter__contenedor__form__input">
                            <input
                            required 
                            class="newsletter__contenedor__form__input-input"
                            type="email">
                            <i class="newsletter__contenedor__form__input-icono far fa-envelope"></i>
                        </div>
                        <div class="newsletter__contenedor__form__btn">
                            <button class="newsletter__contenedor__form__btn-btn" type="submit">Enviar</button>
                            <p class="newsletter__contenedor__form__btn-satisfactorio">¡Suscrito! ¡Muchas gracias!</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `

    const divElement = document.createElement('div');
    divElement.innerHTML = component;

    const formularioNewsletter = divElement.querySelector('#formularioNewsletter')

    formularioNewsletter.addEventListener('submit', (e) => {
        e.preventDefault();
        formularioNewsletter.reset();
        divElement.querySelector('.newsletter__contenedor__form__btn-satisfactorio').style.display = "block";

        setTimeout(() => {
            divElement.querySelector('.newsletter__contenedor__form__btn-satisfactorio').style.display = "none";
        }, 5000)
    })

    return divElement
}