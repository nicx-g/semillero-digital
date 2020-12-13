export default () => {
    const component =
    `<!-- 2 columnas -->
    <div class="container-fluid mb-5">
        <div class="row">
          <div class="col-sm ">
            <h5 class="display-5 mt-3 pl-3">Queremos sembrar integración social a través de la educación digital </h5>  <p class="py-3 px-4">Somos una comunidad de profesionales voluntarios que brinda un programa de capacitaciones en oﬁcios digitales y mentoreo laboral, a jóvenes en situación de
                pobreza económica.<br> <br>
                Nuestro objetivo es POTENCIAR personas, CONECTAR caminos e INTEGRAR mundos que parecieran estar diseñados para no cruzarse: <br>Lxs Jóvenes en pobreza económica de un lado y lxs Profesionales y las Empresas del campo laboral digital del otro.
                </p>
                <a href="#" class="mt-5 px-5" target="_blank"><button class="btn btn-outline-success my-2 my-sm-0 p-2  shadow-lg mb-5 rounded" type="submit">VER CURSOS</button></a>

                
          </div>
          <div class="col-sm">
            <img src="./src/resources/images/16.png" class="figure-img img-fluid rounded img__size1"  alt="nosotros"> 
          </div>
          
        </div>
    </div>
    <!--  -->
<!-- inicio testimonio-->
  <div class="card-deck p-4 mt-5">
  <div class="card pt-3">
    
    <img src="./src/resources/images/opiniones__alumnos-Sol.png" class="card-img-top align-self-center" alt="opinion1" style="width:40% ">
    <div class="card-body">      
      <h5 class="d-flex justify-content-center font-weight-bold">Sol</h5>
      <p class="card-text">“Entré por medio de la <b>CURIOSIDAD</b> y hoy, es esa misma la que me impulsa cada miércoles a ir al curso con más ansias de <b>aprender y superararme</b>”.</p>
    </div>
    
    <div class="card-footer">
      <p class="vendor_card_footer d-flex justify-content-center display-6">Curso Google Ads - Sede Barracas </p>
    </div>

  </div>

  <div class="card pt-3">  
       
    <img src="./src/resources/images/opiniones__alumnos-Lucas.png" class="card-img-top align-self-center" alt="opinion1" style="width:40% ">

    <div class="card-body">
      <h5 class="d-flex justify-content-center font-weight-bold">Lucas</h5>
      <p class="card-text">“Para mí SEMILLERO significa <b>sembrar conocimiento</b>. Es un espacio donde podes expandir varias ramas tanto personales como laborales”</p>
    </div>
    <div class="card-footer">
      <p class="vendor_card_footer d-flex justify-content-center display-6">Curso Google Ads - Sede Barracas </p>
    </div>
  </div>
   

  <div class="card pt-3">
    
    <img src="./src/resources/images/opiniones__alumnos-Sole.png" class="card-img-top align-self-center" alt="opinion1" style="width:40% ">
    <div class="card-body">
      <h5 class="d-flex justify-content-center font-weight-bold">Sole</h5>
      <p class="card-text">“SEMILLERO es un espacio de encuentro y por sobretodo un lugar donde puedo <b> desarrollarme y formarme como profesional</b>”.</p>
    </div>
    <div class="card-footer">
      <p class="vendor_card_footer  d-flex justify-content-center display-6">Curso Community Manager - Sede Villa 31</p>
    </div>
   
  </div>
</div>
<!-- fin testimonios 2 -->
<!-- boton cursos -->
<div class="container-fluid mb-5">
  <div class="row">
    <div class="col-sm ">
        <a href="#" class="btn__secondary mt-5 px-5" target="_blank"><button class="btn btn-outline-secondary my-2 my-sm-0 p-2  shadow-lg mb-5 rounded" type="submit">VER TODOS</button></a>   
    </div>
  </div>
</div>`

    const divElement = document.createElement('div');
    divElement.innerHTML = component;


    return divElement
}