import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Awards() {
  function stars() {
    let count = 50;
    let scene = document.querySelector(".scene");
    let i = 0;
    while (i < count) {
      let star = document.createElement("i");
      let x = Math.floor(Math.random() * window.innerWidth);

      let duration = Math.random() * 1;
      let h = Math.random() * 100;

      star.style.left = x + "px";
      star.style.width = 1 + "px";
      star.style.height = h + "px";
      star.style.animationDuration = duration + "s";

      scene.appendChild(star);
      i++;
    }
  }
  useEffect(() => {
    stars();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="scene">
        <div className="info">
          <h1>Rocket Loader</h1>
          <p> A Pox Development Component</p>
          <p>Since the awards page is yet to be created :)</p>
        </div>
        <div className="rocket">
          <img
            className="rocketimg"
            alt="rocketimg"
            src="https://www.clipartmax.com/png/full/112-1123035_rocket-rocket-icon-png.png"
          />
        </div>
      </div>
    </div>
  );
}
