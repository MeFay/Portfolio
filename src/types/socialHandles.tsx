import { /* AiFillGithub,*/ AiFillLinkedin } from "react-icons/ai";

export type SocialHandle = {
  name: string;
  icon: JSX.Element;
  link: string;
};

export const socialHandles: SocialHandle[] = [
  /*{ name: "Github", icon: <AiFillGithub />, link: "" },*/
  { name: "LinkedIn", icon: <AiFillLinkedin />, link: "" },
];
