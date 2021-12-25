import {services} from "../data";
import {GetServerSidePropsContext, GetStaticPropsContext} from "next";
import ServiceCard from "../components/ServiceCard";



const index = () => {

    return(
        <div className="flex flex-col flex-grow px-6 pt-1 ">
            <h6 className="my-3 text-base font-medium"> I am currently pursuing B.Tech Degree(Final Year) in Computer Science
                Engineering from Academy of Technology. I have 3+ years of experience in
                Web Development and I have a Youtube Channel where I teach Full Stack
                Web Development
            </h6>
            <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
                 style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
            >
                <h6 className="my-3 text-xl font-semibold tracking-wide">What I offer</h6>
                <div className="grid gap-6 my-3 md:grid-cols-2">
                    {
                        services.map(service => <ServiceCard service={service}/> )
                    }
                </div>
            </div>
        </div>
    )
}

export default index;

/*export const getServerSideProps = async (context:GetServerSidePropsContext) => {

    const res = await fetch("http://localhost:3000/api/services")
    const data = await res.json()


    return {
        props:{
            services: data.services,
        }
    }
}*/

/*export const getStaticProps = async (context:GetStaticPropsContext) => {

    const res = await fetch("http://localhost:3000/api/services")
    const data = await res.json()


    return {
        props:{
            services: data.services,
        }
    }
}*/
