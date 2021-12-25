import React, {useState, useEffect, FunctionComponent} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

const NavItem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string
}> = ({activeItem,name,route,setActiveItem}) => {
    return (
        activeItem !== name ? (

            <Link href={route}>
                <a>
                    <span  onClick={() => setActiveItem(name)} className="hover:text-green">{name}</span>
                </a>
            </Link>
        ):null
    )
}

const Navbar = () => {

    const [activeItem, setActiveItem] = useState("")


    const {pathname} = useRouter()

    useEffect(() => {
        if (pathname === "/") setActiveItem("About");
        if (pathname === "/projects") setActiveItem("Projects");
        if (pathname === "/resume") setActiveItem("Resume");
    }, []);


    return (
        <div className="flex justify-between px-5 py-3 my-3">
            <span className="font-bold text-green text-xl border-green md:text-2xl">{activeItem}</span>
            <div className="text-lg flex space-x-3">
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="About"
                    route="/"
                    />
                {/*Projects*/}
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="Projects"
                    route="/projects"
                />
                {/*Resume*/}
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="Resume"
                    route="/resume"
                />
            </div>
        </div>
    )
}

export default Navbar;