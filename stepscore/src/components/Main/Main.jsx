import React, { useState } from "react";
import "./Main.css";
import logo from "../../assets/img/bechtle-logo.png";
import Bild1 from "../../assets/img/protein.png";
import Bild2 from "../../assets/img/apple-watch.jpg";
import sorry from "../../assets/img/sorry.png";


const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [showComponentA, setShowComponentA] = useState(false);
  const [showComponentB, setShowComponentB] = useState(false);
  const [showNoPrice, setShowNoPrice] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue === "10000") {
      setShowComponentA(true);
      setShowComponentB(false);
      setShowNoPrice(false);
    } else if (inputValue === "20000") {
      setShowComponentA(false);
      setShowComponentB(true);
      setShowNoPrice(false);
    } else {
      setShowComponentA(false);
      setShowComponentB(false);
      setShowNoPrice(true);
    }

    setInputValue("");
  };

  return (
    <div className="Main">
      <img src={logo} className="logo" alt="..." />
      <h1>StepScore</h1>
      <p className="text-1">a semesterproject by Franziska Dudichum</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="gelaufene Schritte eingeben"
            aria-label="countedSteps"
            aria-describedby="button-addon2"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="hover-button"
            type="input"
            id="button-addon2"
          >
            Senden
          </button>
        </div>
      </form>
      {showComponentA && <ComponentA />}
      {showComponentB && <ComponentB />}
      {showNoPrice && <NoPrice />}
    </div>
  );
};

const NoPrice = () => {
  return (
    <div className="card">
      <img src={sorry} className="card-Bild" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Tut uns Leid!</h5>
        <p className="card-text">
          Deine Schritte reichen leider noch nicht für eine Prämie aus.
        </p>
        <p>Versuche es später noch einmal.</p>
      </div>
    </div>
  );
};

const ComponentA = () => {
  return (
    <div className="card">
      <img src={Bild1} className="card-Bild" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Prämie 1</h5>
        <p className="card-text">Herzlichen Glückwunsch! Deine Prämie:</p>
        <p>eine Protein Riegel!</p>
        <a
          href="https://www.bechtle.com/ueber-bechtle/presse/pressemeldungen/2022/bechtle-erhaelt-auszeichnung-gesunder-arbeitgeber"
          className="btn btn-primary"
        >
          Einlösen
        </a>
      </div>
    </div>
  );
};

const ComponentB = () => {
  return (
    <div className="card">
      <img src={Bild2} className="card-Bild" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">Prämie 2</h5>
        <p className="card-text">Herzlichen Glückwunsch! Deine Prämie:</p>
        <p>eine Apple Watch!</p>

        <a
          href="https://www.bechtle.com/ueber-bechtle/presse/pressemeldungen/2022/bechtle-erhaelt-auszeichnung-gesunder-arbeitgeber"
          className="btn btn-primary"
        >
          Einlösen
        </a>
      </div>
    </div>
  );
};

export default App;
