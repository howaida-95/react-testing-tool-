import { skillsProps } from "./skills.types";
export const Skills = ({ skills }: skillsProps) => {
    
  return (
    <ul>    
        {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
        ))}
    </ul>
  );
}