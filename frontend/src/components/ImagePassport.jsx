import React, { useState, useEffect } from "react";
import tong from "../assets/tongsansfond.png";

const ImagePassport = ({ flags }) => {

  // flags vient de l'App.jsx en useEffect into fetch en passant par le composant PassPort

  return (
    flags.length > 0 &&
    flags.slice(0, 10).map((flag) => {
      // if (flag.name === 'Antartica') {
      return (
        <article className="col-6" key={flag.image}>
          <div className="monumentTong">
            <p className="monumentNamePassport">{flag.name}</p>
            <img className="imgTongPassport" src={tong} alt="tong" />
          </div>
          <img className="imgCountryPassport" src={flag.image} alt={flag.name} />
        </article>
      )
      // }
    }
    )
  );
};

export default ImagePassport;
