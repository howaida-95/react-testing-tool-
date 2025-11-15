import React from "react";
import "./App.css";
import { Skills } from "./components/skills/skills.tsx";

function App() {
  return (
    <div className="App">
      <Skills skills={["HTML", "CSS", "JavaScript"]} />
    </div>
  );
}

export default App;
