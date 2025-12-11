import React from "react";
const Card = ({ Chars, ScopeID }) => {
  const DSinfo = Chars.find((Enemy) => Enemy.id === ScopeID);
  return (
    <div className="card text-bg-dark col-sm12 col-lg-2 justify-content-evenly my-3 mx-auto ">
      <img
        src={DSinfo.Imagen}
        className="card-img-top"
        alt="Imagen de + {DSinfo.Imagen}"
        style={{objectFit: "cover",
          height: "100%",
          width: "100%"
        }}
      />
      <div className="card-body text-start ">
        <h5 className="card-title">{DSinfo.Enemy}</h5>

        <p className="d-inline-flex gap-1">
          <a
            className="btn btn-outline-secondary"
            data-bs-toggle="collapse"
            href={"#"+DSinfo.id}
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Saber mas acerca de estas basuras.
          </a>
        </p>
        <div className="collapse" id={DSinfo.id}>
          <p className="card-text">{DSinfo.Description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
