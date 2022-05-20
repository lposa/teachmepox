import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PulloutDiv from "../components/PulloutDiv";
import finger from "../finger-png-43096.png";

function WhyMe() {
  const [textInput, setTextInput] = useState("");
  const [answer, setAnswer] = useState(false);

  function handleTextChange(e) {
    setTextInput(e.target.value);
  }

  function submitText(e) {
    e.preventDefault();
    const pulloutUp = document.querySelector(".pullout-up");
    const pulloutLeft = document.querySelector(".pullout-left");
    const pulloutBottom = document.querySelector(".pullout-bottom");
    if (textInput.toLocaleLowerCase() == "star wars") {
      setAnswer(true);
    } else {
      setAnswer(false);
    }

    if (window.visualViewport.width < 768) {
      pulloutUp.setAttribute(
        "style",
        "transform:translateY(0); transform:translateX(0);display:block;"
      );
    } else {
      pulloutUp.setAttribute(
        "style",
        "transform:translateY(0); transform:translateX(50%);display:block;"
      );
    }

    pulloutLeft.setAttribute("style", "opacity:0;");
    pulloutBottom.setAttribute("style", "opacity:0;");

    blowFire();
  }

  function pullFinger() {
    const img = document.querySelector(".pullout-finger-img");
    const container = document.querySelector(".pullout-left");

    if (window.visualViewport.width < 768) {
      container.setAttribute("style", "transform:translateX(0)");
    } else {
      container.setAttribute("style", "transform:translateX(100%");
    }

    img.setAttribute("style", "opacity:0; display:none");

    const text = document.querySelector(".whyme-text-one");

    text.setAttribute("style", "transform:translateX(100%); opacity:0;");
  }

  function clickPuslatingCircle() {
    const bottom = document.querySelector(".pullout-bottom");

    if (window.visualViewport.width < 768) {
      bottom.setAttribute("style", "transform:translateX(0px)");
      bottom.setAttribute("style", "transform:translateY(500px);opacity:100%");
    } else {
      bottom.setAttribute(
        "style",
        "transform:translateY(420px);transform:translateX(1050px) !important;"
      );
    }

    const pulsatingCircle = document.querySelector(".pulsating-circle");
    pulsatingCircle.setAttribute("style", "display:none");

    const fhewText = document.querySelector(".fhew-text");
    fhewText.setAttribute("style", "opacity:100%;color: #e25822;");
  }

  function clickPopcorn() {
    const content = document.querySelector(".pullout-bottom div");
    const funFact = document.querySelector(".movies-fun-fact");
    content.setAttribute("style", "transform:translateX(2000px)");

    funFact.setAttribute(
      "style",
      "transition:all 1s ease-in-out; transform:translateX(2000px)"
    );

    const cloud = document.querySelector(".cloud");
    cloud.setAttribute("style", "opacity:100%");

    const form = document.querySelector(".popcorn-form");
    form.setAttribute("style", "opacity:100%");
  }

  function callEnd() {
    const pulloutUp = document.querySelector(".pullout-up");
    pulloutUp.setAttribute("style", "transform:translateX(-2000px)");
    const endContainer = document.querySelector(".end-container");
    endContainer.setAttribute(
      "style",
      "opacity:100%; transform:translateX(0);"
    );
  }

  function blowFire() {
    setTimeout(function () {
      const fire = document.querySelector(".fire-container");
      fire.setAttribute("style", "opacity:0");
      const sheldon = document.querySelector(".sheldon-container");
      sheldon.setAttribute("style", "opacity:100%;");
    }, 10000);
  }

  const firstCardBody = (
    <>
      <div className="pulsating-circle" onClick={clickPuslatingCircle}></div>
      <p className="fhew-text"> Fhew.That was a close one right ? </p>
    </>
  );

  const secondCardBody = (
    <>
      <p className="movies-fun-fact">
        Fun fact: In the movies, I eat my popcorn before the movie starts.Why ?
        I can 't hear them talking in the movie if I am chewing.
        <strong> Take one! </strong>
      </p>
      <img
        src="https://media.istockphoto.com/photos/movie-popcorn-box-fresh-snack-food-container-isolated-on-white-picture-id172851244?k=20&m=172851244&s=612x612&w=0&h=C60587sjxcpWeRAJL_zhrsHHZXZdThENRa-aFxDCGa8="
        alt="popcorn"
        className="popcorn-image"
        onClick={clickPopcorn}
      />
      <div className="cloud">
        <p> Hello, I 'm a talking popcorn! What is your favorite movie?</p>
      </div>
      <form className="popcorn-form" onSubmit={submitText}>
        <label>
          Enter answer here :
          <input
            type="text"
            value={textInput}
            className="popcorn-field"
            onChange={handleTextChange}
          />
        </label>
        <input
          type="submit"
          value="Submit answer to the Gods"
          className="popcorn-submit"
        />
      </form>
    </>
  );

  const thirdCardBody = (
    <div>
      <div className="fire-container">
        <h2> QUICK BLOW THE FIRE OUT </h2>
        <div className="fire">
          <div className="flames">
            <div className="flame"> </div> <div className="flame"> </div>
            <div className="flame"> </div> <div className="flame"> </div>
          </div>
          <div className="logs"> </div>
        </div>
      </div>
      <div className="sheldon-container">
        <p>
          Hahaha, did you really just blow at the screen ? If you did then...
        </p>
        <img
          src="https://i.pinimg.com/originals/83/51/2a/83512a1bc0ef7233cdb391963f148959.jpg"
          alt="sheldon"
          className="sheldon-img"
          onClick={callEnd}
        />
        <p> ...if you didn 't (or even did), just click on Sheldon.</p>
      </div>
    </div>
  );

  return (
    <div>
      <Navbar />
      <PulloutDiv
        classSelect={"pullout-left"}
        contentHeader={"I'm creative"}
        contentParagraph={
          "Quick, click on the pulsating thingy or the world will explode"
        }
        contentBody={firstCardBody}
      />
      <img
        onClick={pullFinger}
        className="pullout-finger-img"
        src={finger}
        alt="finger"
      />
      <div className="whyme-container">
        <div className="whyme-text-one">
          <h1>Why me, you may ask ?</h1>
          <p> Pull my finger;) </p>
          <p className="why-me-mobile-only">
            For better experience for this page, visit it on Desktop!
          </p>
        </div>
      </div>
      <PulloutDiv
        classSelect={"pullout-bottom"}
        contentHeader={"I'm weird"}
        contentParagraph={"Not in a bad way. Trust me."}
        contentBody={secondCardBody}
      />
      <PulloutDiv
        classSelect={"pullout-up"}
        contentHeader={answer ? "Correct answer" : "Your answer is wrong..."}
        contentParagraph={
          answer ? "We can be friends" : "We MAY still be friends"
        }
        contentBody={thirdCardBody}
      />
      <div className="end-container">
        <h1> The End! </h1> <p> Hope you enjoyed my little presentation </p>
        <p>
          <span
            className="letter i"
            style={{ color: "red", fontWeight: "bold" }}
            onClick={() => {
              document.querySelector(".i").setAttribute("style", "opacity:0");
              document
                .querySelector(".hot-i")
                .setAttribute("style", "opacity:100");
            }}
          >
            I
          </span>
          n all seriousness now, why you should choose me for your next project:
        </p>
        <ul>
          <li>
            I &nbsp;
            <span
              className="letter am"
              style={{ color: "blue", fontWeight: "bold" }}
              onClick={() => {
                document
                  .querySelector(".am")
                  .setAttribute("style", "opacity:0");
                document
                  .querySelector(".hot-am")
                  .setAttribute("style", "opacity:100");
              }}
            >
              am
            </span>
            &nbsp; really creative
          </li>
          <li>
            I ne
            <span
              className="letter ver"
              style={{ color: "orange", fontWeight: "bold" }}
              onClick={() => {
                document
                  .querySelector(".ver")
                  .setAttribute("style", "opacity:0");
                document
                  .querySelector(".hot-ver")
                  .setAttribute("style", "opacity:100");
              }}
            >
              ver &nbsp;
            </span>
            say something is impossible
          </li>
          <li>
            I love to work, you will never see me angr
            <span
              className="letter y"
              style={{ color: "orange", fontWeight: "bold" }}
              onClick={() => {
                document.querySelector(".y").setAttribute("style", "opacity:0");
                document
                  .querySelector(".hot-y")
                  .setAttribute("style", "opacity:100");
              }}
            >
              y
            </span>
            &nbsp; or stressed!
          </li>
          <li>
            I &nbsp;
            <span
              className="letter ho"
              style={{ color: "green", fontWeight: "bold" }}
              onClick={() => {
                document
                  .querySelector(".ho")
                  .setAttribute("style", "opacity:0");
                document
                  .querySelector(".hot-ho")
                  .setAttribute("style", "opacity:100");
              }}
            >
              ho
            </span>
            pe we can work &nbsp;
            <span
              className="letter t"
              style={{ color: "green", fontWeight: "bold" }}
              onClick={() => {
                document.querySelector(".t").setAttribute("style", "opacity:0");
                document
                  .querySelector(".hot-t")
                  .setAttribute("style", "opacity:100");
              }}
            >
              t
            </span>
            ogether!
          </li>
        </ul>
        <p style={{ fontSize: "15px" }}>
          P.S.see the colored letters for a secret reason ;)
        </p>
        <div className="hot-container">
          <p className="hot-i hot-container-item"> I </p>
          <p className="hot-am hot-container-item"> am </p>
          <p className="hot-ver hot-container-item"> ver </p>
          <p className="hot-y hot-container-item"> y </p>
          <p className="hot-ho hot-container-item"> ho </p>
          <p className="hot-t hot-container-item"> t </p>
        </div>
      </div>
    </div>
  );
}

export default WhyMe;
