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
    title: "UI/UX",
    data: [
      { skill: "Figma", level: "Experienced" },
      { skill: "Sketch", level: "Intermediate" },
      { skill: "XD", level: "Intermediate" },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      { skill: "HTML", level: "Experienced" },
      { skill: "CSS", level: "Experienced" },
      { skill: "JavaScript", level: "Experienced" },
      { skill: "Tailwind", level: "Intermediate" },
      { skill: "Bootstrap", level: "Experienced" },
      { skill: "React", level: "Experienced" },
      { skill: "React Native", level: "Experienced" },
    ],
  },
  {
    title: "Backend Development",
    data: [
      { skill: "Node JS", level: "Experienced" },
      { skill: "MongoDB", level: "Intermediate" },
      { skill: "PHP", level: "Experienced" },
      { skill: "Python", level: "Intermediate" },
      { skill: "MySQL", level: "Experienced" },
    ],
  },
];
