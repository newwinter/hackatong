import React from "react";
import monuments from "../assets/data";
import "./Dispatch.css";

function Dispatch() {
  return (
    <div className="container">
      <h1>Les expéditions</h1>
      {monuments.map((monument) => (
        <div className="monument">
          <h2 key={monument.id}>{monument.name}</h2>
          <img src={monument.image_url} alt="momument" />
        </div>
      ))}
    </div>
  );
}

export default Dispatch;