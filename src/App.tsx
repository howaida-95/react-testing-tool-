import React from "react";
import "./App.css";
import { Skills } from "./components/skills/skills.tsx";
import { Counter } from "./components/counter/counter.tsx";
import { AppProviders } from "./providers/app-providers.tsx";
import { MuiMode } from "./components/mui/mui-mode.tsx";
function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <Skills skills={["HTML", "CSS", "JavaScript"]} />
        <Counter />
      </div>
    </AppProviders>
  );
}

export default App;
