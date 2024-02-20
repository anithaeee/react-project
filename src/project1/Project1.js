import React from "react";
import "../project1/project1.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
const Project1 = () => { 
  const [color, setcolor] = useState([]);
  const [numofsquares, setnumofsquares] = useState(6);
  const [pickcolor, setpickcolor]  = useState("");
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
  const reset = () =>{
     let color = generatecolor(numofsquares);
     setcolor(color);
     let pickcolor = choosecolor();
     setpickcolor(pickcolor);
  }
  const choosecolor = () =>{
    let randomcolor =Math.floor(Math.random()*color.length);
    return color[randomcolor];
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
          <button className="btn1"style={{border:"none",background:"white",float:"left"}}>NEW COLORS</button>
          <button className="btn2"style={{border:"none",background:"white"}}>EASY</button>
          <button className="btn3"style={{border:"none",background:"white"}}>HARD</button>
          <div>
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
