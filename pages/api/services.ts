import {NextApiRequest, NextApiResponse} from "next";

import {services} from "../../data";

export default (req:NextApiRequest,res:NextApiResponse) => {

    //get request er default
    res.status(200).json({ services })

}