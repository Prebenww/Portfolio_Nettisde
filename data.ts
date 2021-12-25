import {RiComputerLine} from "react-icons/ri";
import {AiOutlineSafety} from "react-icons/ai";
import {AiOutlineFundProjectionScreen} from "react-icons/ai";
import {AiOutlineTeam} from "react-icons/ai";
import {BiGitPullRequest} from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineDatabase } from "react-icons/ai";
import { RiNavigationLine } from "react-icons/ri";
import { AiOutlineBarChart } from "react-icons/ai";
import {IProject ,Service, Skill} from "./types"
import {BsCircleFill} from "react-icons/bs";



export const services:Service[] = [
    {
        title: "Front-end utvikling",
        about: "Utvikle skalerbare apper for mobil og web med <b>React JS</b> og <b>React Native.</b> ",
        Icon: RiComputerLine,
    },
    {
        title: "Back-end utvikling",
        about: "Lage backend løsninger med <b>Node JS</b>, <b>Firebase</b> og <b>MongoDB</b>.",
        Icon: AiOutlineDatabase,
    },
    {
        title: "IT-sikkerhet",
        about: "Kan håndtere <b>sikkerhetsarbeid</b> i en organisasjon og utføre risikoanalyser og ulike former for sikkerhetstesting.",
        Icon: AiOutlineSafety,
    },
    {
        title: "Software Engineering",
        about: "Velge og anvende metoder og teknikker for å innhente, spesifisere og validere krav til et software system. ",
        Icon: AiOutlineSetting,
    },
    {
        title: "Prosjektledelse",
        about: "<b>Kommunisere</b> prosjektets hensikt, lønnsomhet og gjennomføring til både interne og eksterne aktører,\n" +
            "<br/><b>Lage</b> typiske dokumenter som brukes i prosjektdokumentasjon.\n"  +
            "<br/><b>Vurdere</b> og bruke ulike metoder å organisere og lede prosjekter.\n",
        Icon: AiOutlineTeam,
    },
    {
        title: "Business Intelligence",
        about: "Bruke business intelligence til å <b>formulere</b> og <b>løse</b> virksomhetsproblemer og for å <b>støtte</b> ledelsesmessige beslutninger. Samt arbeide på BI utviklingsprosjekter i et team",
        Icon: AiOutlineFundProjectionScreen,
    },
    {
        title: "Informasjonsarkitektur",
        about: "<b>Analysere</b>, <b>planlegge</b>, <b>designe</b>, <b>implementere</b> og <b>evaluere</b> store komplekse nettsteder.",
        Icon: AiOutlineBarChart,
    },
    {
        title: "Forretningssystemer",
        about: "Tilnærminger og retningslinjer for å installere og tilpasse <b>forretningssystemer</b>. ",
        Icon: AiOutlineSetting ,
    },

    {
        title: "Big Data: lagring og bearbeiding",
        about: "Designe og implementere løsninger for distribuert datalagring og behandling av store og distribuerte datamengder.",
        Icon: BiGitPullRequest,
    },
    {
        title: "Digital markedsføring",
        about: "Innhente, analysere og evaluere digitale data om brukere og anvende resultatene i digital markedsføring",
        Icon: RiNavigationLine,
    },

]


export const languages: Skill[] = [
    {
        Icon: BsCircleFill,
        name: "React JS",
        level: "100",
    },
    {
        Icon: BsCircleFill,
        name: "React Native",
        level: "100",
    },
    {
        Icon: BsCircleFill,
        name: "TypeScript",
        level: "100",
    },
    {
        Icon: BsCircleFill,
        name: "Next JS",
        level: "100",
    },

];

export const tools: Skill[] = [
    {
        Icon: BsCircleFill,
        name: "Redux",
        level: "100",
    },

    {
        Icon: BsCircleFill,
        name: "Photoshop",
        level: "100",
    },
    {
        Icon: BsCircleFill,
        name: "Firebase",
        level: "100",
    },
    {
        Icon: BsCircleFill,
        name: "SQLite",
        level: "100",
    },
];

export const projects: IProject[] = [
    {
        name: "COVID Tracker",
        description:
            "This app shows a statistical view about corona virus over the world",
        image_path: "/images/covid.jpg",
        deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
        github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
        category: ["react"],
        key_techs: ["React", "Chart.js", "Material UI"],
    },
    {
        name: "Algorithm Visualizer",
        image_path: "/images/algoVisual.png",
        deployed_url: "https://visual-algorithm.web.app/",
        github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
        category: ["react"],
        description:
            "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
        key_techs: ["React", "firebase", "Framer Motion"],
    },

    {
        name: "Dev Talks",
        image_path: "/images/dev.jpg",
        deployed_url: "https://dev-talks.herokuapp.com/",
        github_url: "https://github.com/Dey-Sumit/Dev-talks",
        category: ["node", "mongo", "react"],
        description:
            "Social Media app for developers who can share project,create posts,etc...",
        key_techs: [
            "React",
            "Redux",
            "Node",
            "Express",
            "Mongo",
            "REST API",
            "Bootstrap",
        ],
    },

    {
        name: "Realtime Chat App",
        image_path: "/images/chatapp.jpg",
        deployed_url: "https://sumit-chat.netlify.app/",
        github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
        category: ["node", "react"],
        description:
            "Basic Realtime Chat App where one can create a room can talk to each other",
        key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
    },

    {
        name: "Tweeter Clone",
        image_path: "/images/tweetme.jpg",
        deployed_url: "https://sumaxtweetme.pythonanywhere.com/",
        github_url: "https://github.com/Dey-Sumit/tweetme",
        category: ["django", "react"],
        description:
            "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
        key_techs: ["React", "Django", "Django REST API"],
    },

    {
        name: "Color Classification using tf.js",
        image_path: "/images/color.jpg",
        deployed_url: "!#",
        github_url: "https://github.com/Dey-Sumit/color-classification",
        category: ["express"],
        description:
            "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
        key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
    },
    {
        name: "YouTube using YouTube ",
        image_path: "/images/youtubeClone.png",
        deployed_url: "https://not-utube.web.app/",
        github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
        category: ["express"],
        description:
            'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
        key_techs: [
            "React",
            "Redux",
            "Firebase Auth",
            "YouTube API",
            "Sass",
            "Bootstrap",
        ],
    },
    {
        name: "Football App",
        image_path: "/images/football.png",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/Dey-Sumit/football-app",
        category: ["react"],
        description:
            "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
        key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
    },

]