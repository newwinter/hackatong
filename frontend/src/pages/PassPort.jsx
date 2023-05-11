import React from "react";
import avatar from "@assets/avatar.jpg";
import "./PassPort.css";
import monument from "@assets/data";


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

      <div className="PassportBackground container">
        <div className="row textPassport">
          <article className="col-lg-2">
          </article>
          <article className="col-lg-3">
            <p>{monument[1].name}</p>
            <img className="imgCountryPassport" src={avatar} alt="" />
          </article>
          <article className="col-lg-3">
          </article>
          <article className="col-lg-4">
            <p>{monument[2].name}</p>
            <img className="imgCountryPassport" src={avatar} alt="" />
          </article>

          <article className="col-lg-2">
          </article>
          <article className="col-lg-2">
            <p>Test</p>
            <img className="imgCountryPassport" src={avatar} alt="" />
          </article>
          <article className="col-lg-4">
          </article>
          <article className="col-lg-4">
            <p>Test</p>
            <img className="imgCountryPassport" src={avatar} alt="" />
          </article>

          <article className="col-lg-2">
          </article>
          <article className="col-lg-2">
            <p>Test</p>
            <img className="imgCountryPassport" src={avatar} alt="" />
          </article>
          <article className="col-lg-4">
          </article>
          <article className="col-lg-4">
            <p>Test</p>
            <img className="imgCountryPassport" src={avatar} alt="" />
          </article>

          <article className="col-lg-2">
          </article>
          <article className="col-lg-2">
            <p>Test</p>
            <img className="imgCountryPassport" src={avatar} alt="" />
          </article>
          <article className="col-lg-4">
          </article>
          <article className="col-lg-4">
            <p>Test</p>
            <img className="imgCountryPassport" src={avatar} alt="" />
          </article>

          <article className="col-lg-2">
          </article>
          <article className="col-lg-2">
            <p>Test</p>
            <img className="imgCountryPassport" src={avatar} alt="" />
          </article>
          <article className="col-lg-4">
          </article>
          <article className="col-lg-4">
            <p>Test</p>
            <img className="imgCountryPassport" src={avatar} alt="" />
          </article>

        </div>
      </div>
    </div>
  );
}

export default PassPort;
