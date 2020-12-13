export default () => {
    const component = `
    <div class="blog">
        <div class="container">
            <div class="blog__contenedor">
                <div class="blog__contenedor__vendor">
                    <h1 class="blog__contenedor__vendor-titulo">Blog semillero</h1>
                    <p class="blog__contenedor__vendor-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui magni asperiores rem animi porro magnam incidunt perferendis, quam similique et molestias eum alias dolor aliquam at iusto doloribus, cum natus!</p>
                </div>
                <div class="blog__contenedor__entradas">
                    <div class="blog__contenedor__entradas__item principal">
                        <div class="principal blog__contenedor__entradas__item__img">
                            <img class="principal img-fluid blog__contenedor__entradas__item__img-img" src="./src/resources/images/blog1.JPEG" alt="Imagen del blog que tiene a estudiantes con su certificado">
                        </div>
                        <div class="blog__contenedor__entradas__item__vendor">
                            <h2 class="principal blog__contenedor__entradas__item__vendor-titulo">Semillero digital: profesionales de la informática capacitan a jóvenes de barrios vulnerables</h2>
                            <p class="principal  blog__contenedor__entradas__item__vendor-texto">Durante la pandemia creció la oferta y la demanda de este tipo de iniciativas: el encierro y la necesidad de buscar alternativas laborales junto a facilitadores y jóvenes en cursos prácticos de marketing digital y comercio electrónico</p>
                            <div class="blog__contenedor__entradas__item__vendor__subindices">
                                <p class="blog__contenedor__entradas__item__vendor__subindices-fecha">29 de septiembre 2020</p>
                                <a class="blog__contenedor__entradas__item__vendor__subindices-link" href="#">Leer más</a>
                            </div>
                        </div>
                    </div>
                    <div class="contenedor__item">
                        <div class="blog__contenedor__entradas__item">
                            <div class="blog__contenedor__entradas__item__img">
                                <img class="img-fluid blog__contenedor__entradas__item__img-img" src="./src/resources/images/blog2.JPEG" alt="Imagen del blog que tiene a estudiantes con su certificado">
                            </div>
                            <div class="blog__contenedor__entradas__item__vendor">
                                <h2 class="blog__contenedor__entradas__item__vendor-titulo">Los oficios digitales más buscados del mercado laboral y la oportunidad de la Argentina</h2>
                                <p class="blog__contenedor__entradas__item__vendor-texto">Son nuevas posiciones que demandan las empresas y que surgen de la transformación digital. Se relacionan con la administración y atención al comercio, las redes sociales, el desarrollo web y la publicidad digital</p>
                                <div class="blog__contenedor__entradas__item__vendor__subindices">
                                    <p class="blog__contenedor__entradas__item__vendor__subindices-fecha">24 de octubre 2020</p>
                                    <a class="blog__contenedor__entradas__item__vendor__subindices-link" href="#">Leer más</a>
                                </div>
                            </div>
                        </div>
                        <div class="blog__contenedor__entradas__item">
                            <div class="blog__contenedor__entradas__item__img">
                                <img class="img-fluid blog__contenedor__entradas__item__img-img" src="./src/resources/images/blog3.JPEG" alt="Imagen del blog que tiene a estudiantes con su certificado">
                            </div>
                            <div class="blog__contenedor__entradas__item__vendor">
                                <h2 class="blog__contenedor__entradas__item__vendor-titulo">Razones por las que la educación online es más efectiva</h2>
                                <p class="blog__contenedor__entradas__item__vendor-texto">La enseñanza online ha ido en aumento en los últimos años, y no es difícil averiguar el porqué. Por un lado, los cursos de eLearning se han vuelto enormemente populares por el simple hecho de ser mucho más cómodos que los cursos tradicionales cara a cara. Los estudiantes pueden...</p>
                                <div class="blog__contenedor__entradas__item__vendor__subindices">
                                    <p class="blog__contenedor__entradas__item__vendor__subindices-fecha">29 de agosto 2020</p>
                                    <a class="blog__contenedor__entradas__item__vendor__subindices-link" href="#">Leer más</a>
                                </div>
                            </div>
                        </div>
                        <div class="blog__contenedor__entradas__item">
                            <div class="blog__contenedor__entradas__item__img">
                                <img class="img-fluid blog__contenedor__entradas__item__img-img" src="./src/resources/images/blog4.JPG" alt="Imagen del blog que tiene a estudiantes con su certificado">
                            </div>
                            <div class="blog__contenedor__entradas__item__vendor">
                                <h2 class="blog__contenedor__entradas__item__vendor-titulo">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                                <p class="blog__contenedor__entradas__item__vendor-texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iusto labore commodi fugit aspernatur? Possimus, odio, cum natus suscipit placeat quas, corrupti laboriosam perferendis labore earum deleniti! Eaque, architecto tempora?</p>
                                <div class="blog__contenedor__entradas__item__vendor__subindices">
                                    <p class="blog__contenedor__entradas__item__vendor__subindices-fecha">29 de septiembre 2020</p>
                                    <a class="blog__contenedor__entradas__item__vendor__subindices-link" href="#">Leer más</a>
                                </div>
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