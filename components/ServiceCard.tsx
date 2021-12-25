import {FunctionComponent} from "react";
import {IService} from "../type";


const ServiceCard: FunctionComponent<{ service: IService }> = ({service: {Icon, about, title}}) => {


    function createMarkup() {
        return {
            __html: about,
        }
    }

    return (
        <>

        <div className='flex items-center p-2 space-x-4'>

            <Icon className='w-12 h-12 text-green ' />

            <div>
                <h6 className='font-bold'>{title}</h6>
                <p dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </div>
        </>
    )
}
export default ServiceCard