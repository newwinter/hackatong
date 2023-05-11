import React from "react";
import monuments from "@assets/data";
import tong from "../assets/tongsansfond.png";

const ImagePassport = () => {
  // const [flags, setFlags] = useState([]);

  // Problème avec le fetch

  // useEffect(() => {
  //   fetch(`https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json`)
  //     .then(res => res.json())
  //     .then(json => setFlags(json))
  //     .catch(err => console.error(err));
  // }, []);

  return monuments.slice(0, 10).map((monument) => (
    <article className="col-6" key={monument.id}>
      <div className="monumentTong">
        <p className="monumentNamePassport">{monument.country}</p>
        <img className="imgTongPassport" src={tong} alt="tong" />
      </div>
      <img
        className="imgCountryPassport"
        src={monument.flag}
        alt={monument.country}
      />
    </article>
  ));
};

export default ImagePassport;
