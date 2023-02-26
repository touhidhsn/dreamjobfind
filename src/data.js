import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import logo1 from "../src/assets/logos/githublogo.png";
import logo2 from "../src/assets/logos/birdsart.jpg";
import logo3 from "../src/assets/logos/blender.png";
import logo4 from "../src/assets/logos/botim.jpeg";
import logo5 from "../src/assets/logos/linelogo.png";
import logo6 from "../src/assets/logos/mastercardlogo.jpeg";
import logo7 from "../src/assets/logos/potatologo.png";
import logo8 from "../src/assets/logos/volkswagenlogo.png";

export const navigationData = [
  {
    name: "Jobs",
    href: "#",
  },
  {
    name: "Companies",
    href: "#",
  },
  { name: "About", href: "#" },
  {
    name: "Contact",
    href: "#",
  },
  {
    name: "Blogs",
    href: "#",
  },
  { name: "Login", href: "#" },
  {
    name: "Register",
    href: "#",
  },
];

export const searchData = [
  {
    icon: <AiOutlineSearch />,
    placeholder: "Search Job Here..",
    close: <AiOutlineCloseCircle />,
  },
  {
    icon: <BsHouseDoor />,
    placeholder: "Search By Company..",

    close: <AiOutlineCloseCircle />,
  },
  {
    icon: <CiLocationOn />,
    placeholder: "Search By Location..",

    close: <AiOutlineCloseCircle />,
  },
];

export const searchShortData = [
  {
    shortName: "Relevance",
    value: "",
  },
  {
    shortName: "Inclusive",
    value: "",
  },
  {
    shortName: "Shart With",
    value: "",
  },
  {
    shortName: "Contains",
    value: "",
  },
];

export const searchTypeData = [
  {
    typeName: "Full Time",
    value: "",
  },
  {
    typeName: "Remote",
    value: "",
  },
  {
    typeName: "Contract",
    value: "",
  },
  {
    typeName: "Part Time",
    value: "",
  },
];

export const searchPositionData = [
  {
    positionName: "Expert",
    value: "",
  },
  {
    positionName: "Senior",
    value: "",
  },
  {
    positionName: "Junior",
    value: "",
  },
  {
    positionName: "Beginner",
    value: "",
  },
];

export const jobsData = [
  {
    id: 1,
    image: logo1,
    title: "Web Developer",
    time: "Now",
    location: "canada",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamauctor congue bibendum. Mauris nulla ante",
    company: "Github Co.",
  },

  {
    id: 2,
    image: logo2,
    title: "Grapich Designer",
    time: "Now",
    location: "USA",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamauctor congue bibendum. Mauris nulla ante",
    company: "Birds Co.",
  },

  {
    id: 3,
    image: logo3,
    title: "Marketing",
    time: "Now",
    location: "Sweden",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamauctor congue bibendum. Mauris nulla ante",
    company: "Blender",
  },

  {
    id: 4,
    image: logo4,
    title: "Customer Service",
    time: "Now",
    location: "Dubai",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamauctor congue bibendum. Mauris nulla ante",
    company: "BotIM.",
  },
  {
    id: 5,
    image: logo5,
    title: "Accountant",
    time: "Now",
    location: "USA",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamauctor congue bibendum. Mauris nulla ante",
    company: "Line INC",
  },
  {
    id: 6,
    image: logo6,
    title: "Software Eng",
    time: "Now",
    location: "UK",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamauctor congue bibendum. Mauris nulla ante",
    company: "MasterCard Co.",
  },
  {
    id: 7,
    image: logo7,
    title: "Sales Executive",
    time: "Now",
    location: "NewCastle",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamauctor congue bibendum. Mauris nulla ante",
    company: "Potato Co.",
  },
  {
    id: 8,
    image: logo8,
    title: "Country Agent",
    time: "Now",
    location: "canada",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamauctor congue bibendum. Mauris nulla ante",
    company: "Volks Wagen Inc",
  },
];
