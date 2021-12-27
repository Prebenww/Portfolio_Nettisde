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
        about: "Kan <b>Kommunisere</b> prosjektets hensikt, lønnsomhet og gjennomføring til både interne og eksterne aktører,\n" +
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
        id: 1,
        name: "Restaurant Finder",
        description:
            "React Native med Hooks, Context API, AsyncStorage, Google Places API, Firebase.",
        image_path: "/images/restaurantFinder.jpg",
        deployed_url: "https://expo.dev/@prebenww/Revju",
        github_url: "https://github.com/Prebenww/RestaurantFinder",
        category: ["react"],
        key_techs: ["React Native", "Context API", "Styled Components"],
    },
    {
        id: 2,
        name: "Nettbutikk",
        image_path: "/images/algoVisual.png",
        deployed_url: "https://github.com/Prebenww/e-shop",
        github_url: "https://github.com/Prebenww",
        category: ["react"],
        description:
            "Nettbutikk med Sass, Redux, GraphQL, firebase,",
        key_techs: ["React", "firebase", "Redux"],
    },

    {
        id: 3,
        name: "Tesla klone",
        image_path: "/images/tesla.jpg",
        deployed_url: "https://expo.dev/@prebenww/teslaKlone",
        github_url: "https://github.com/Dey-Sumit/Dev-talks",
        category: ["react native"],
        description:
            "Klone av Tesla sin UI med React.",
        key_techs: [
            "React Native",

        ],
    },

    {
        id: 4,
        name: "Uber Eats Klone",
        image_path: "/images/uber-eats.jpg",
        deployed_url: "https://sumit-chat.netlify.app/",
        github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
        category: ["node", "react"],
        description:
            "Basic Realtime Chat App where one can create a room can talk to each other",
        key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
    },

    {
        id: 5,
        name: "Planets",
        image_path: "/images/planets.jpg",
        deployed_url: "https://sumaxtweetme.pythonanywhere.com/",
        github_url: "https://github.com/Dey-Sumit/tweetme",
        category: ["django", "react"],
        description:
            "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
        key_techs: ["React", "Django", "Django REST API"],
    },

    {
        id: 6,
        name: "Portfolio Nettisde",
        image_path: "/images/portfolio.png",
        deployed_url: "https://github.com/Dey-Sumit/tweetme",
        github_url: "https://github.com/Dey-Sumit/color-classification",
        category: ["express"],
        description:
            "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
        key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
    },

]