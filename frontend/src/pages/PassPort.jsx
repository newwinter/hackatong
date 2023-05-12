/* eslint-disable react/prop-types */
import React from "react";
import ImagePassport from "@components/ImagePassport";
import "./PassPort.css";

function PassPort({ flags, userName, userAge }) {
  return (
    <div>
      <h1 className="PassportTitle"> Passeport de {userName}</h1>
      <div className="PassportIdentity container">
        <div className="row">
          <article className="col-8">
            <p>Âge : {userAge} ans</p>
          </article>
          <article className="col-8">
            <p>Tongpon(s) : 0</p>
          </article>
        </div>
      </div>
      <div className="PassportBackground container">
        <div className="row textPassport">
          <ImagePassport flags={flags} />
        </div>
      </div>
    </div>
  );
}

export default PassPort;
