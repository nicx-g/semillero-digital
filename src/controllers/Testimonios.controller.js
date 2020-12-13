export default () => {
    const component = `
    <h5 class="h2 text-center mt-4">Opiniones de los alumnos.</h5>

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
      
      <img src="./src/resources/images/9.png" class="card-img-top align-self-center mt-5" alt="opinion1" style="width:60% ">
     
    </div>
  </div>


    

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
    `

    const divElement = document.createElement('div');
    divElement.innerHTML = component;



    return divElement
}