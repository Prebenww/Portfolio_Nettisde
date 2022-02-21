import {AiFillGithub} from "react-icons/ai"
import {AiOutlineCloudDownload} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {GoLocation} from "react-icons/go"
import {GiTie} from "react-icons/gi"
import {SiExpo} from "react-icons/si"
import {useTheme} from "next-themes"
import React, {useState} from "react";
import Image from "next/image"


const Sidebar = () => {

    const {theme, setTheme} = useTheme();


    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }


    return (
        <div>
            <img
                src="data:image/jpeg;base64,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"
                alt="profil-bilde"
                className="w-32 h-32 mx-auto rounded-full"


            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-green">Preben </span>
                Wulff</h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500"

            >Webutvikler</p>
            <a
                className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
                href="CV_PrebenWulff.pdf"
                download="CV_PrebenWulff.pdf"><AiOutlineCloudDownload className="w-6 h-6"
                                                                      style={{marginRight: 5}}/> Last ned CV</a>
            {/*//social buttons*/}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">

                <a href=""><AiFillGithub className="w-8 h-8 cursor-pointer" aria-label="Github"/></a>

                <a href=""><AiFillLinkedin className="w-8 h-8 cursor-pointer" aria-label="Linkedin"/></a>

                <a href=""><SiExpo className="w-7 h-8 cursor-pointer" aria-label="expo"/></a>

            </div>
            {/*address*/}
            <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
                 style={{marginLeft: "-1rem", marginRight: "-1rem"}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation/>
                    <span>
                    Bergen, Norge
                </span>
                </div>
                <p className="my-2">
                    prebenw@live.no
                </p>
                <p className="my-2">
                    +47 951 351 88
                </p>
            </div>
            {/*email button*/}
            <button onClick={() => window.open("mailto:prebenw@live.no")} className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus: outline-none
            ">
                Kontakt meg
            </button>
            <button onClick={changeTheme}
                    className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2">
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
        </div>
    )
}

export default Sidebar;
