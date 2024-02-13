import React from "react";
import "../project1/project1.css";
import "bootstrap/dist/css/bootstrap.css";
const Project1 = () => { 
  const makecolor = () => {
     let r = Math.floor(Math.random()*256);
     let g = Math.floor(Math.random()*256);
     let b = Math.floor(Math.random()*256);
     return "rgb("+r+", "+g+", "+b+")"
  }
  const generatecolor  = (num) => {
    let arr = [];
    for(var i=0; i<num; i++){
      arr.push(makecolor());
    }
    return arr
  }
  return (
    <>
      <div className="card">
        <div className="card-text">
          <h4>THE GREAT</h4>
          <h1>RGB(97,22g,222)</h1>
          <h4>GUESSING GAME</h4>
        </div>
        <div className="buttons">
          <button className="btn">NEW COLORS</button>
          <div>
          <button className="btn">EASY</button>
          <button className="btn">HARD</button>
          </div>
        </div>
        <div className="container">
            <div className="square" style={{borderRadius:"10px"}}></div>
            <div className="square" style={{borderRadius:"10px"}}></div>
            <div className="square" style={{borderRadius:"10px"}}></div>
            <div className="square" style={{borderRadius:"10px"}}></div>
            <div className="square" style={{borderRadius:"10px"}}></div>
            <div className="square" style={{borderRadius:"10px"}}></div>
        </div>
      </div>
    </>
  );
};

export default Project1;
