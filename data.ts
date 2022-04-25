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
        about: "Lage backend løsninger med <b>Express</b>, <b>Firebase</b> og <b>MongoDB</b>.",
        Icon: AiOutlineDatabase,
    },
    {
        title: "IT-sikkerhet",
        about: "Kan håndtere <b>sikkerhetsarbeid</b> i en organisasjon og utføre risikoanalyser og ulike former for sikkerhetstesting.",
        Icon: AiOutlineSafety,
    },
    {
        title: "Software Engineering",
        about: "Velge og anvende metoder og teknikker for å innhente, spesifisere og validere krav til et software system.",
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
        name: "Hulu Klone",
        image_path: "/images/hulu.png",
        deployed_url: "https://hulu-klone.vercel.app/",
        github_url: "https://github.com/Prebenww/HULU_KLONE",
        category: ["react"],
        description:
            "HULU klone med Lazy loading og serverside rendering. ",
        key_techs: ["Typescript", "React JS", "Next JS", "Tailwindcss"],
    },
    {
        id: 2,
        name: "Restaurant Finder",
        description:
            "React Native med Hooks, Context API, AsyncStorage, Google Places API, Firebase.",
        image_path: "/images/restaurantFinder.jpg",
        deployed_url: "https://expo.dev/@prebenww/Revju",
        github_url: "https://github.com/Prebenww/RestaurantFinder",
        category: ["react native"],
        key_techs: ["React Native", "Context API", "Styled Components"],
    },

    {
        id: 3,
        name: "Uber Eats Klone",
        image_path: "/images/uber-eats.jpg",
        deployed_url: "https://expo.dev/@prebenww/uberEats",
        github_url: "https://github.com/Prebenww/uberEatsKlone",
        category: [ "react native"],
        description:
            "Uber Eats klone med React Native fra en kode konkurranse",
        key_techs: ["React Native", "Firebase", "Redux"],
    },


    {
        id: 4,
        name: "Tesla klone",
        image_path: "/images/tesla.jpg",
        deployed_url: "https://expo.dev/@prebenww/teslaKlone",
        github_url: "https://github.com/Prebenww/",
        category: ["react native"],
        description:
            "Klone av Tesla sin UI med React Native.",
        key_techs: [
            "React Native",

        ],
    },


    {
        id: 5,
        name: "Solar System",
        image_path: "/images/planets.jpg",
        deployed_url: "not-deployed",
        github_url: "https://github.com/Prebenww/SOLAR_SYSTEMS",
        category: ["Vue Js", "Java"],
        description:
            "Oversikt over planeter og solsystemer med diverse funksjoner. Laget med Java og Vue.js.",
        key_techs: ["Java", "Vue JS"],
    },


    {
        id: 6,
        name: "Klone av viken.no",
        image_path: "/images/viken.png",
        deployed_url: 'https://viken-no-klone.vercel.app/',
        github_url: "https://github.com/Prebenww/Viken.no-klone",
        category: ["react"],
        description:
            "Responsiv klone av Viken Fylkeskomune sin hjemmeside.",
        key_techs: [ "React JS", "Next JS", "Tailwindcss"],
    },

    {
        id: 7,
        name: "Nettbutikk ",
        image_path: "/images/nettbutikk.png",
        deployed_url: 'https://nettbutikk-egil-og-sonner-as.vercel.app/',
        github_url: "https://github.com/Prebenww/ecommerce-store",
        category: ["react"],
        description:
            "Nettbutikk for Egil og Sønner AS med Next.js + Shopify Storefront API (GraphQL) + Tailwind CSS. Ikke helt ferdig enda",
        key_techs: [ "React js", "Next JS", "Tailwindcss", "Shopify"],
    },
    {
        id: 8,
        name: "AUGTRACK ",
        image_path: "/images/aug-track.png",
        deployed_url: 'https://augtrack.com/',
        github_url: "https://github.com/Prebenww/AUG-SHOP",
        category: ["react"],
        description:
            "AugTrack gir deg et heatmap av din nettside ved å bruke truedepth teknologi fra iPhone sitt front camera.  ",
        key_techs: [ "React js", "Next JS", "Tailwindcss", "Shopify"],
    },
    {
        id: 9,
        name: "Google Klone",
        image_path: "/images/google.png",
        deployed_url: 'not-deployed',
        github_url: "https://github.com/Prebenww/Google-klone",
        category: ["react"],
        description:
            "Google klone med Google Search API og Serverside rendering med Next JS.",
        key_techs: [ "React JS", "Next JS", "Tailwindcss"],
    },

    {
        id: 10,
        name: "Medium Klone",
        image_path: "/images/medium.png",
        deployed_url: "not-deployed",
        github_url: "https://github.com/Prebenww/Medium-Clone",
        category: ["react"],
        description:
            "Medium blogg med Sanity backend.",
        key_techs: ["Typescript", "React JS", "Next JS", "Tailwindcss","Sanity"],
    },



]