import React, { useState, useEffect } from "react";
import tong from "../assets/tongsansfond.png";

const ImagePassport = () => {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json`
    )
      .then((res) => res.json())
      .then((json) => setFlags(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    flags.length > 0 &&
    flags.slice(0, 8).map((flag) => {
      return (
        <article className="col-6" key={flag.image}>
          <div className="monumentTong">
            <p className="monumentNamePassport">{flag.name}</p>
            <img className="imgTongPassport" src={tong} alt="tong" />
          </div>
          <img
            className="imgCountryPassport"
            src={flag.image}
            alt={flag.name}
          />
        </article>
      );
    })
  );
};

export default ImagePassport;
