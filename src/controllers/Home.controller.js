export default () => {
    const component =
    `<div class="container">
        <h1 class="h1 bg-danger d-flex justify-content-center">Hello world</h1>
    </div>`

    const divElement = document.createElement('div');
    divElement.innerHTML = component;


    return divElement
}