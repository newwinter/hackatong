/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import "./HomePageNew.css";
import { Link } from "react-router-dom";
import Banner from "@components/Banner";

function HomePageNew({ setUserName, userName, setUserAge, userAge }) {
  return (
    <div>
      <div className="homepage-container">
        <h1>Welcome, dear tong-trotter!</h1>
        <Banner />
        <p className="homepage-description">
          Tu trouveras ici les plus beaux monuments du monde...
          <br /> Nous te proposons de parcourir ces lieux et, lorsque tu les
          auras visités, une surprise t'attendra ! <br />
          Pour une meilleure expérience utilisateur·ice, saisis ton prénom et
          ton âge ci-dessous :
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
          <label id="user-age">
            Ton âge ici :
            <input
              type="number"
              name="userAge"
              value={userAge}
              onChange={(e) => setUserAge(e.target.value)}
            />
          </label>
        </form>
        <p>
          Tu es prêt·e ? Alors enfile ta plus belle paire de claquettes
          chaussettes, et...
        </p>
        <div className="discover">
          <Link to="/Page1">Let's Begin !</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePageNew;
