
import {AiFillGithub} from  "react-icons/ai"
import {AiFillLinkedin} from  "react-icons/ai"
import {GoLocation} from  "react-icons/go"
import {GiTie} from "react-icons/gi"
import {SiExpo} from "react-icons/si"

const Sidebar = () => {
    return (
        <div>
            <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFldH8PTySDLA/profile-displayphoto-shrink_200_200/0/1581099833225?e=1643241600&v=beta&t=bca9obD3S56426Uw0xXwFaP97rn2vpA1Z1KG2rNK_4k"
                alt="profil-bilde"
                className="w-32 h-32 mx-auto rounded-full"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider">
                <span>Preben</span>
                Wulff</h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full"

            >Webutvikler</p>
            <a
                className="px-2 py-1 my-3 bg-gray-200 rounded-full"
                href=""
                download="name"><GiTie className="w-6 h-6" />Last ned CV</a>
            {/*//social buttons*/}
            <div>
                <a href="" ><SiExpo size={12}/></a>
            </div>

            <div>
                <a href="" ><AiFillGithub/></a>
            </div>

            <div>
                <a href="" ><AiFillLinkedin/></a>
            </div>

            {/*address*/}
            <div>
                <div>
                    <GoLocation  />
                <span>
                    Bergen, Norge
                </span>
                </div>
                <p>
                    prebenw@live.no
                </p>
                <p>
                    +47 951 351 88
                </p>
            </div>
            {/*email button*/}
            <button>
                Kontakt meg
            </button>
        </div>
    )
}

export default Sidebar;