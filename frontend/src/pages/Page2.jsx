import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "@pages/Page2.css";
import monuments from "@assets/data";

function Page2() {
  useEffect(() => {
    document.title = `Hackatong -${monuments.name}`;
  }, []);

  return (
    <div className="mainPage2">
      <div>
        <h1 className="titlePage2">
          {monuments.flag} {monuments.name} {monuments.flag}
        </h1>
      </div>
      <div className="imgPage2">
        <img
          src={monuments.image_url}
          alt={monuments.name}
          className="img-fluid containImgPage2"
        />
      </div>
      <div className="card cardPage2">{monuments.description}</div>
      <div className="card cardPage2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo aut
        id, ullam obcaecati architecto fugiat tempore sint doloremque quam
        aperiam enim in fugit, quidem, aspernatur neque voluptates quod
        temporibus!
      </div>
      <div className="card cardPage2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo aut
        id, ullam obcaecati architecto fugiat tempore sint doloremque quam
        aperiam enim in fugit, quidem, aspernatur neque voluptates quod
        temporibus!
      </div>
      <Link to="/PassPort">
        <button type="button" className="css-button-retro">
          Valide ta Quête
        </button>
      </Link>
    </div>
  );
}

export default Page2;
