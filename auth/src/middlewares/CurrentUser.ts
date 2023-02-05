import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken';
/**
 * interface UserPayload 
 * currentUser content in the payload
 * @param id string
 * @param email string
 * 
 */
interface UserPayload  {

    id:string;
    email:string

}
/**
 * Modyfing a type definition proprety
 */
declare global {
    namespace Express {
          interface Request {

                  currentUser?:UserPayload

            }
    }
}



export const CurrentUserMiddlleware = (

    req:Request,
    res:Response,
    next:NextFunction
) => {

        if(!req.session?.jwt){
                return next();
        }
        try{
            const payload = jwt.verify(req.session.jwt,process.env.jwt!) as UserPayload;
            req.currentUser = payload;

        }catch(error){

            res.status(500).send({currentUser:null})
            
        }

        next();

}