// App.jsx
import { useState } from "react";
import "./App.css";

import soundQ from "./assets/Q.mp3";
import soundW from "./assets/W.mp3";
import soundE from "./assets/E.mp3";
import soundA from "./assets/A.mp3";
import soundS from "./assets/S.mp3";
import soundD from "./assets/D.mp3";
import soundZ from "./assets/Z.mp3";
import soundX from "./assets/X.mp3";
import soundC from "./assets/C.mp3";

const soundMap = {
  Q: soundQ,
  W: soundW,
  E: soundE,
  A: soundA,
  S: soundS,
  D: soundD,
  Z: soundZ,
  X: soundX,
  C: soundC,
};

function App() {
  const [display, setDisplay] = useState("");
  const [power, setPower] = useState(true);

  const handleClick = (key) => {
    if (!power) {
      setDisplay("Power off");
      return;
    }
    const audio = document.getElementById(`audio-${key}`);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setDisplay(key); //can print the name of the key as per the official sound but i didn't
    }
  };

  return (
    <div className="drum-machine">
      <div id="display">
        <div className="button-container">
          {Object.keys(soundMap).map((key) => (
            <button
              key={key}
              className="button-design"
              onClick={() => handleClick(key)}
            >
              {key}
            </button>
          ))}

          {Object.entries(soundMap).map(([key, src]) => (
            <audio key={key} id={`audio-${key}`} src={src} />
          ))}
        </div>

        <div className="toggle-border">
          <input
            id="power-toggle"
            type="checkbox"
            checked={power}
            onChange={() => setPower((prev) => !prev)}
          />
          <label htmlFor="power-toggle">
            <div className="handle"></div>
          </label>
        </div>

        <div id="current">{display}</div>
      </div>
    </div>
  );
}

export default App;
