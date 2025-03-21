import { FaGithub, FaHouse, FaLinkedin, FaLinkedinIn, FaReact } from "react-icons/fa6";
import { E1, E2, E3 } from "../assets";
import { BiFace } from "react-icons/bi";
import { RiToolsFill } from "react-icons/ri";
import { MdContactPage } from "react-icons/md";



export const Socials = [
    {
        id:`LinkedIn-${Date.now()}`,
        Icon: FaLinkedinIn,
        url:"https://www.linkedin.com/in/dash-northeastern-university-a9763633a/?originalSubdomain=ca",
        color:"#1877F2"
    },
    {
        id:`Github-${Date.now()}`,
        Icon: FaGithub,
        url:"https://www.linkedin.com/in/dash-northeastern-university-a9763633a/?originalSubdomain=ca",
        color:"#0072b1",
    },
]

export const EventsData = [
    {
        id:`Jules Portfolio-${Date.now()}`,
        name: "Event-1",
        imgSrc: E1,
        gitUrl:"https://www.linkedin.com/in/dash-northeastern-university-a9763633a/?originalSubdomain=ca",
    },
    {
        id:`Online virtual chat-${Date.now()}`,
        name: "Event-2",
        imgSrc: E2,
        gitUrl:"https://www.linkedin.com/in/dash-northeastern-university-a9763633a/?originalSubdomain=ca",
    },
    {
        id:`D.A.S.H.(Data Analytics Society for Huskies) Portal-${Date.now()}`,
        name: "Event-3",
        imgSrc: E3,
        gitUrl:"https://www.linkedin.com/in/dash-northeastern-university-a9763633a/?originalSubdomain=ca",
    },
]