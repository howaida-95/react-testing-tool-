import React, { useState } from "react";
import { skillsProps } from "./skills.types";
export const Skills = ({ skills }: skillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <span>test</span>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? <button>Start learning</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
    </>
  );
};
