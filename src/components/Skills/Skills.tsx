import "./Skills.css";
import { experience } from "../../types/experience";
import { SkillCard } from "./SkillCard";

export const Skills = () => {
  return (
    <section id="skill">
      <div className="section__wrapper">
      <div className="section__header section__header--center">
          <h2 className="primary-title">My Skills</h2>
        </div>
        <div className="skill__container">
          {experience.map((skill, index) => (
            <SkillCard {...skill} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
