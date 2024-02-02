import React from "react";
import "../project1/project1.css";
import "bootstrap/dist/css/bootstrap.css";
const Project1 = () => {
  return (
    <>
      <div className="card">
        <div className="card-text">
          <h4>THE GREAT</h4>
          <h1>RGB(97,22g,222)</h1>
          <h4>GUESSING GAME</h4>
        </div>
        <div className="buttons">
          <span className="spans">NEW COLORS</span>
          <div>
          <button className="btn">EASY</button>
          <button className="btn">HARD</button>
          </div>
        </div>
        <div className="container">
          <div className="squares">
            <div className="square" style={{borderRadius:"10px"}}></div>
            <div className="square" style={{borderRadius:"10px"}}></div>
            <div className="square" style={{borderRadius:"10px"}}></div>
            <div className="square" style={{borderRadius:"10px"}}></div>
            <div className="square" style={{borderRadius:"10px"}}></div>
            <div className="square" style={{borderRadius:"10px"}}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project1;
