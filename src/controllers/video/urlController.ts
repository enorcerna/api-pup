import { Request, Response } from "express"
import {LinkExtract} from "../../generator"





const urlController = async(req:Request, res:Response) =>
{
  const { url } = req.query
  const video = await LinkExtract( url as string )


  res.json( { url, video } )
}
export default urlController
