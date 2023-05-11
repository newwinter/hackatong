import React from "react";
import "../App.css";
import "@pages/Page2.css";

function Page2() {
  return (
    <div className="mainPage2">
      <div>
        <h1 className="titlePage2">La Tour de Pise</h1>
      </div>
      <div className="imgPage2">
        <img
          src="https://media.discordapp.net/attachments/1106113841487691776/1106160974408466442/TourDePise.jpg?width=1089&height=817"
          alt="La Tour de Pise"
          className="img-fluid containImgPage2"
        />
      </div>
      <div className="card cardPage2">
        Lorem ipsum dolor dsit amet consectetur adipisicing elit. Illo nemo aut
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
      <div className="card cardPage2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo aut
        id, ullam obcaecati architecto fugiat tempore sint doloremque quam
        aperiam enim in fugit, quidem, aspernatur neque voluptates quod
        temporibus!
      </div>
      <button type="button" className="css-button-retro">
        Valide ta Quête
      </button>
    </div>
  );
}

export default Page2;
