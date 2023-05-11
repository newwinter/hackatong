import React from "react";
import avatar from "@assets/avatar.jpg";
import "./PassPort.css";

function PassPort() {
  return (
    <div>
      <h1 className="PassportTitle">Passeport</h1>
      <div className="PassportIdentity container">
        <div className="row">
          <article className="col-7">
            <p>Nom de famille : Bob</p>
          </article>
          <article className="col-3">
            <img className="avatar" src={avatar} alt="Avatar" />
          </article>
          <article className="col-7">
            <p>Prénom : Smith</p>
          </article>
          <article className="col-7">
            <p>Âge : 30 ans</p>
          </article>
          <article className="col-5">
            <p>Tongpon(s) : 0</p>
          </article>
        </div>
      </div>
      <div className="PassportBackground" />
    </div>
  );
}

export default PassPort;
