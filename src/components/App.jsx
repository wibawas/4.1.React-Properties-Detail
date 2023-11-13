import React from "react";
import Coloum from "./Coloum";
import emojipedia from "../emojipedia";

function Gather(value) {
  return (
    <Coloum emoji={value.emoji} name={value.name} meaning={value.meaning} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(Gather)}</dl>
    </div>
  );
}

export default App;
