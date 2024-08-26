import { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { sumArray } from "../../helper/helper";
import { projects } from "../../types/projects";
import { ProjectsCard } from "./ProjectsCard";

const projectCategories = [
  { name: "All" },
  { name: "Web" },
  { name: "Apps" },
  { name: "UI/UX" },
];

export const Projects = () => {
  const [displayedProjects, setDisplayedProjects] = useState(projects);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [indicatorOffset, setIndicatorOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const tabRefs = useRef<HTMLButtonElement[]>([]);

  useEffect(() => {
    // Calculate the offset and width for the active tab indicator
    const previousTabs = tabRefs.current.filter(
      (_, index) => index < activeTabIndex
    );
    const newOffset = sumArray(previousTabs.map((tab) => tab.offsetWidth));
    setIndicatorOffset(newOffset);

    const activeTabWidth = tabRefs.current[activeTabIndex]?.offsetWidth || 0;
    setIndicatorWidth(activeTabWidth);
  }, [activeTabIndex]);

  const updateProjects = (category: string) => {
    const filteredProjects =
      category === "All"
        ? projects
        : projects.filter(
            (project) =>
              project.category.toLowerCase() === category.toLowerCase()
          );

    setDisplayedProjects(filteredProjects);
  };

  return (
    <section id="projects">
      <div className="section__wrapper projects__container">
        <div className="section__header--center">
          <h2 className="primary-title">Projects</h2>
        </div>
        <nav>
          {projectCategories.map(({ name }, index) => (
            <button
              ref={(el) => (tabRefs.current[index] = el!)}
              onClick={() => {
                setActiveTabIndex(index);
                updateProjects(name);
              }}
              key={index}
              className={activeTabIndex === index ? "active" : ""}
            >
              {name}
            </button>
          ))}
          <span
            className="active__indicator"
            style={{
              left: `${indicatorOffset}px`,
              width: `${indicatorWidth}px`,
            }}
          ></span>
        </nav>
        <div className="card__container">
          {displayedProjects.map((project) => (
            <ProjectsCard
              title={project.title}
              image={project.image}
              data={project.data}
              stack={project.stack}
              demoLink={project.data.demoLink}
              key={project.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
