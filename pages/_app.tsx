import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Sidebar from "../components/Sidebar";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <div className="grid grid-cols-12 gap-6 px-48 my-14 px-5">
            <div className="col-span-12 p-4 text-center col-span-3 bg-white rounded-2xl ">
                <Sidebar />
            </div>
            <div className="col-span-9 bg-white  rounded-2xl col-span-12">
                < Component
                    {...
                        pageProps
                    }
                />
            </div>
        </div>
    )


}

export default MyApp
