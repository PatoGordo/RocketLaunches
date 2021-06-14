import { NextApiRequest, NextApiResponse } from "next"
import axios from 'axios'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'GET') {

    const myRequest = await axios.get('https://fdo.rocketlaunch.live/json/launches/next/4')
    res.setHeader('Cache-Control', 's-maxage=35, stale-while-revalidate')
    
    return res.json({
      result: myRequest.data.result
    })
  }
}