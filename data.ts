import {RiComputerLine} from "react-icons/ri";
import {AiOutlineSafety} from "react-icons/ai";
import {AiOutlineFundProjectionScreen} from "react-icons/ai";
import {AiOutlineTeam} from "react-icons/ai";
import {BiGitPullRequest} from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineDatabase } from "react-icons/ai";
import { RiNavigationLine } from "react-icons/ri";
import { AiOutlineBarChart } from "react-icons/ai";
import {IService, ISkill} from "./type"
import {BsCircleFill} from "react-icons/bs";



export const services:IService[] = [
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


export const languages: ISkill[] = [
    {
        Icon: BsCircleFill,
        name: "Python",
        level: "45",
    },
    {
        Icon: BsCircleFill,
        name: "Java Script",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "React Native",
        level: "80",
    },
    {
        Icon: BsCircleFill,
        name: "React",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "Django",
        level: "80",
    },
    {
        Icon: BsCircleFill,
        name: "Bootstrap",
        level: "80",
    },
];

export const tools: ISkill[] = [
    {
        Icon: BsCircleFill,
        name: "Figma",
        level: "85",
    },
    {
        Icon: BsCircleFill,
        name: "Photoshop",
        level: "45",
    },
    {
        Icon: BsCircleFill,
        name: "Illustrator",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "Framer",
        level: "45",
    },
];