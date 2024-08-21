import { BsPatchCheckFill } from "react-icons/bs";
import "./SkillCard.css";
import { ExperienceItem } from "../../types/experience";

type SkillCardProps = {
  title: string;
  data: ExperienceItem[];
};

export const SkillCard: React.FC<SkillCardProps> = ({ title, data }) => {
  return (
    <div className="skill__card">
      <h3>{title}</h3>
      <div className="skill__content">
        {data.map((info, index) => (
          <article className="skill__details" key={index}>
            <BsPatchCheckFill className="skill__icon" />
            <div>
              <h4 className="skill__name">{info.skill}</h4>
              <small className="text__mutted skill__level">{info.level}</small>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
