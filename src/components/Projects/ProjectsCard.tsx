import "./ProjectsCard.css";
import { ProjectsCardProps } from "../../types/projects";

export const ProjectsCard: React.FC<ProjectsCardProps> = ({
  image,
  title,
  data,
  stack,
  demoLink,
}) => {
  return (
    <div className="project-card">
      <div className="project-card__image">
        <img src={image} alt={title} />
      </div>

      <div className="project-card__details">
        <h2 className="project-card__title">{title}</h2>
        <p className="project-card__description">{data.description}</p>

        <div className="project-card__stack">
          <div className="project-card__stack-label">Stack:</div>
          <div className="project-card__stack-items">
            {stack.map((item, index) => (
              <div key={index} className="project-card__stack-item">
                <span
                  className="project-card__stack-icon"
                  style={{ color: item.iconColor }}
                >
                  {item.icon}
                </span>
                <span className="project-card__stack-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="project-card__actions">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};
