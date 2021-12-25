
import {AiFillGithub} from  "react-icons/ai"
import {AiOutlineCloudDownload} from  "react-icons/ai"
import {AiFillLinkedin} from  "react-icons/ai"
import {GoLocation} from  "react-icons/go"
import {GiTie} from "react-icons/gi"
import {SiExpo} from "react-icons/si"
import {useTheme} from "next-themes"


const Sidebar = () => {

    const {theme, setTheme} =  useTheme();

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <div>
            <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFldH8PTySDLA/profile-displayphoto-shrink_200_200/0/1581099833225?e=1643241600&v=beta&t=bca9obD3S56426Uw0xXwFaP97rn2vpA1Z1KG2rNK_4k"
                alt="profil-bilde"
                className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-green">Preben </span>
                Wulff</h3>
            <p  className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500"

            >Webutvikler</p>
            <a
                className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
                href="/asset"
                download="Preben Wulff CV"><AiOutlineCloudDownload className="w-6 h-6" style={{marginRight: 5}}/> Last ned CV</a>
            {/*//social buttons*/}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full" >



                <a href="" ><AiFillGithub className="w-8 h-8 cursor-pointer"/></a>



                <a href="" ><AiFillLinkedin className="w-8 h-8 cursor-pointer"/></a>

                <a href="" ><SiExpo className="w-7 h-8 cursor-pointer"/></a>

            </div>
            {/*address*/}
            <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500" style={{marginLeft: "-1rem", marginRight: "-1rem"}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation  />
                <span >
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
            <button onClick={changeTheme} className="bg-gradient-to-r from-green to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2">
                Toggle theme
            </button>
        </div>
    )
}

export default Sidebar;