export type ExperienceItem = {
  skill: string;
  level: string;
};

export type ExperienceCategory = {
  title: string;
  data: ExperienceItem[];
};

export const experience: ExperienceCategory[] = [
  {
    title: "UI/UX Design",
    data: [
      { skill: "Figma", level: "Intermediate" },
      { skill: "Sketch", level: "Novice" },
      { skill: "Canva", level: "Intermediate" },
    ],
  },
  {
    title: "JavaScript Frameworks & Libraries",
    data: [
      { skill: "React.js", level: "Proficient" },
      { skill: "Redux.js", level: "Intermediate" },
      { skill: "JavaScript", level: "Proficient" },
      { skill: "TypeScript", level: "Intermediate" },
    ],
  },
  {
    title: "CSS Frameworks & Preprocessors",
    data: [
      { skill: "CSS", level: "Proficient" },
      { skill: "SASS", level: "Intermediate" },
      { skill: "styled-components", level: "Intermediate" },
      { skill: "Tailwind CSS", level: "Intermediate" },
      { skill: "Bootstrap", level: "Intermediate" },
    ],
  },
  {
    title: "Responsive Design & Cross-Browser",
    data: [
      { skill: "Responsive Web Design", level: "Proficient" },
      { skill: "Cross-Browser Development", level: "Intermediate" },
    ],
  },
  {
    title: "APIs & Debugging",
    data: [
      { skill: "REST APIs", level: "Proficient" },
      { skill: "Browser Developer Tools", level: "Intermediate" },
    ],
  },
  {
    title: "Backend Development",
    data: [
      { skill: "Node.js", level: "Novice" },
      { skill: "MongoDB", level: "Novice" },
      { skill: "Java", level: "Intermediate" },
      { skill: "Spring Boot", level: "Novice" },
      { skill: "GraphQL", level: "Novice" },
    ],
  },
];
