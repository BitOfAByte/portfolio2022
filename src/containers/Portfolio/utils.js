import ImageJS from "../../images/js.jpg";
import ImageCpp from "../../images/c++.png";
import ImageTs from "../../images/ts.png";
import java from "../../images/java.jpg";
import ImagePy from '../../images/python.png';

export const portfolioData = [
  {
    sectionId: 2,
    projectName: "next-app",
    projectLink: "https://github.com/DaatUserName/next-app", //project link here based on you choice
    image: ImageJS,
  },
  {
    sectionId: 2,
    projectName: "My first custom coded discord bot",
    projectLink: "https://github.com/DaatUserName/Lynx",
    image: ImageJS,
  },
  {
    sectionId: 2,
    projectName: "API for getting reddit posts",
    projectLink: "https://github.com/discord-brewery/Hive-API",
    image: ImageJS,
  },
  {
    sectionId: 2,
    projectName: "First full stack development project",
    projectLink: "https://github.com/DaatUserName/MyBarry",
    image: ImageJS,
  },

  {
    sectionId: 4,
    projectName: "30 Days of Python",
    projectLink: "https://github.com/DaatUserName/30-Days-of-Python",
    image: ImagePy,
  }, 
  {
    sectionId: 5,
    projectName: "First school arduino project",
    projectLink: "https://github.com/DaatUserName/COIN-SCALE.ino",
    image: ImageCpp,
  },
   {
    sectionId: 5,
    projectName: "School assignment",
    projectLink: "https://github.com/DaatUserName/7-Segment",
    image: ImageCpp,
  },
   {
    sectionId: 6,
    projectName: "First TypeScript Bot",
    projectLink: "https://github.com/DaatUserName/UwUBot",
    image: ImageTs,
  },
   {
    sectionId: 7,
    image: java,
    projectLink: "https://github.com/CordMc-Developers/CordProx",
    projectName: "Minecraft BungeeCord plugin",
  },
  {
    sectionId: 7,
    image: java,
    projectLink: "https://github.com/CordMc-Developers/PvPCore",
    projectName: "Minecraft PvP plugin",
  },

  {
    sectionId: 6,
    image: ImageTs,
    projectLink: "https://github.com/DaatUserName/website",
    link2: "https://twitter.com/btsp_dev",
    projectName: "Website with Typescript",
  },
  {
    sectionId: 6,
    image: ImageTs,
    projectLink: "https://github.com/SnowMc/Discord-Bot",
    projectName: "Discord bot for SlowNewt",
    
  },
];

export const filterOptions = [
  {
    label: "All",
    id: 1,
  },
  {
    label: "JavaScript",
    id: 2,
  },
  {
    label: "Java",
    id: 3,
  },
  {
    label: "Python",
    id: 4,
  }, 
  {
    label: "C++",
    id: 5,
  },
  {
    label: "TypeScript",
    id: 6,
  },
  {
    label: "Java",
    id: 7,
  }
];
