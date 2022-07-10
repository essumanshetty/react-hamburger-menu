import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    let ul = document.querySelector("ul");
    ul.addEventListener("click", function () {
      let links = document.querySelector(".links");
      links.classList.remove("active");
    });
  });

  const clickHandler = () => {
    let links = document.querySelector(".links");
    links.classList.toggle("active");
   
  };


  return (
    <div className="App">
      <div className="head">
        <div className="envelope">
          <div className="logo">
            <h2> My Logo </h2>
          </div>

          <div className="hamburger">
            <button onClick={clickHandler}>Hamburger</button>
          </div>
        </div>

        <div className="links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Dashboard</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
