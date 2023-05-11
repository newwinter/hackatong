import React from "react";
import monuments from "../assets/data";
import "./Dispatch.css";

function Dispatch() {
  return (
    <div>
      <h1>Les Expéditions</h1>

      <div className="container">
        {monuments.map((monument) => (
          <div className="container_monument">
            <div className="title">
              <img src={monument.tong_url} className="tong containerImg" alt="tong" />
              <h2 key={monument.id}>{monument.name}</h2>
            </div>
            <div className="monument">
              <img src={monument.image_url} alt="momument" />
            </div>
            <div>
              <button type="button">Discover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dispatch;
