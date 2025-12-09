import React from "react";
import "./App.css";
import { Skills } from "./components/skills/skills.tsx";
import { Counter } from "./components/counter/counter.tsx";

function App() {
  return (
    <div className="App">
      <Skills skills={["HTML", "CSS", "JavaScript"]} />
      <Counter />
    </div>
  );
}

export default App;
