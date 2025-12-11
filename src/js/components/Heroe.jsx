import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
const Heroe = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://i.ytimg.com/vi/XIcMHl6Qr2o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBKSiWOro-_jeaxoNR3M5Zwf_PkTQ"
            className="d-block h-50 w-100"
            alt="DatSucks2"
            style={{ objectFit: "cover" }}
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>DatSucks ?</h5>
            <p>Actually DarkSouls II is really good, just annoying.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://static.wikia.nocookie.net/darksouls/images/5/5f/BlackGulch.jpg/revision/latest?cb=20160109004617"
            className="d-block h-50 w-100"
            alt="LaCloaca"
            style={{ objectFit: "cover" }}
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>La Cloaca 2</h5>
            <p>The cloaca is actually the worst SwampZone between DSI & DSII</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/03/dark-souls-2-pursuer.jpg"
            class="d-block h-50 w-100"
            alt="TheBugsuer"

          />
          <div class="carousel-caption d-none d-md-block">
            <h5>The Persuer more like The Bugguer</h5>
            <p>No consegui hacer que la imagen no haga cosas raras</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    /* // <div className="px-4 pt-5 my-5 text-center border-bottom">
    //     <h1 className="display-4 fw-bold text-body-emphasis">Centered screenshot</h1>
    //     <div className="col-lg-6 mx-auto">
    //         <p className="lead mb-4"> DarkSouls II</p> 
    //         <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"> 
    //             <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
    //             <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button> 
    //         </div> 
    //     </div> 
    //     <div className="overflow-hidden"> 
    //         <div className="container px-5"> 
    //             <img src={rigoImage} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/> 
    //         </div> 
    //     </div> 
    // </div> */
  );
};
export default Heroe;
