import {services} from "../data";
import {GetServerSidePropsContext, GetStaticPropsContext,} from "next";
import ServiceCard from "../components/ServiceCard";
import {motion} from "framer-motion";
import {fadeInUp} from "../animations";
import {stagger} from "../animations";
import {routeAnimation} from "../animations";

import Head from "next/head"

const index = () => {

    return (
        <motion.div
            variants={routeAnimation} initial="initial" animate="animate" exit="exit"
            className="flex flex-col flex-grow px-6 pt-1 "
        >
            <Head>
                <title>Web utvikler | portfolio | Preben Wulff</title>
            </Head>

            <h6 className="my-3 text-base font-medium"> Teknologi entusiast og entreprenør. Studerer
                Informasjonssystemer med fordypning i Software Engineering og Business lntelligence - ferdig utdannet
                våren 2022.
                Har erfaring med HTML, ess og JS og frameworks som React JS, React Native.
                Driver til daglig mediebedriften Mediatrafikk, <a href="https://mediatrafikk.no/">Mediatrafikk.no</a>.
            </h6>
            <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
                 style={{marginLeft: "-1.5rem", marginRight: "-1.5rem"}}
            >
                <h4 className="my-3 text-xl font-semibold tracking-wide">Ferdigheter</h4>
                <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                    className="grid gap-6 my-3 md:grid-cols-2"
                >
                    {
                        services.map(service => (
                            <motion.div
                                variants={fadeInUp}
                                key={service.title}
                                className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 ">
                                <ServiceCard service={service}/>
                            </motion.div>
                        ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default index;

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {

    /*    const res = await fetch(`${process.env.VERCEL_URL_}/api/services`)
        const data = await res.json();*/

    return {props: {endpoint: process.env.VERCEL_URL}}
}

/*export const getStaticProps = async (context:GetStaticPropsContext) => {

    const res = await fetch("http://localhost:3000/api/services")
    const data = await res.json()


    return {
        props:{
            services: data.services,
        }
    }
}*/
