import { Link } from "react-router-dom";
import React from "react";
import monuments from "../assets/data";
import "./Dispatch.css";

function Dispatch() {
  return (
    <div>
      <h1>Les Expéditions</h1>

      <div className="container-dispatch">
        {monuments.map((monument) => (
          <div className="container_monument">
            <div className="title">
              <img src={monument.tong_url} alt="img" className="tong" />
              <h2 key={monument.id}>{monument.name}</h2>
            </div>
            <div className="monument">
              <img src={monument.image_url} alt="momument" />
            </div>
            <div className="monument-button">
              <Link to={`/Page2/${monument.id}`}>
                <button type="button" className="discover">
                  Discover
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dispatch;
