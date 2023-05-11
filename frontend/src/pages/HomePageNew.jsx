/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import "./HomePageNew.css"
import { Link } from "react-router-dom";

function HomePageNew() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  function submit() {
    <Link to="/">Page1 </Link>
  }
  return (
    <div>
      <div className="homepage-container">
        <h1>Welcome, dear tong-trotter!</h1>
        <p className="homepage-description">
          Tu trouveras ici les plus beaux monuments du monde... Nous te proposons de parcourir ces lieux
          et, lorsque tu les auras visités, une surprise t'attendra ! Pour une
          meilleure expérience utilisateur·ice, saisis quelques infos ci-dessous
        </p>
        <form className="homepage-form">
        <label id="user-name">
          Ton prénom ici : 
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label id="user_age">
          Ton âge ici : 
          <input
            type="text"
            name="userAge"
            value={userAge}
            onChange={(e) => setUserAge(e.target.value)}
          />
           {console.log(userName, userAge)}
        </label>
        </form>
        <p>Tu es prêt·e ? Alors enfile ta plus belle paire de claquettes chaussettes, et... </p>
        <button className="homepage-button" type="button" onClick={submit}>
            let's begin!
          </button>
      </div>
    </div>
   
  );
}

export default HomePageNew;
