import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

export type SocialHandle = {
  name: string;
  icon: JSX.Element;
  link: string;
};

export const socialHandles: SocialHandle[] = [
  { name: "Fiverr", icon: <SiFiverr />, link: "" },
  { name: "Github", icon: <AiFillGithub />, link: "" },
  { name: "LinkedIn", icon: <AiFillLinkedin />, link: "" },
  {
    name: "Youtube",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];
