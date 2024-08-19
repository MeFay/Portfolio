import { useEffect, useState } from "react";
import "./facts.css";
import Odometer from "react-odometerjs";

export const Facts = () => {
  const [technologies, setTechnologies] = useState(0);
  const [learning, setLearning] = useState(0);
  const [skills, setSkills] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTechnologies(13);
      setLearning(3);
      setSkills(7);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="fact__container">
      <div className="fact__item">
        <div className="count__container">
          <Odometer value={technologies} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Technologies Mastered</p>
      </div>
      <div className="fact__item">
        <div className="count__container">
          <Odometer value={learning} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Tools in Progress</p>
      </div>
      <div className="fact__item">
        <div className="count__container">
          <Odometer value={skills} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Design & Development Skills</p>
      </div>
    </div>
  );
};
