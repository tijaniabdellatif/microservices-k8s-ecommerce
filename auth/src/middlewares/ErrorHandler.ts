import {Request,Response,NextFunction} from 'express';
import { RequestValidationError } from '../errors/RequestValidation';
import { DataBaseConnectionError } from '../errors/DatabaseError';
export const errorHandler = (err: Error,req:Request,res:Response,next:NextFunction) =>{
    if(err instanceof RequestValidationError){
          const formatedErrors = err.errors.map(erno =>{
                return {message:erno.msg,field:erno.param}
          })
         return res.status(400).send({errors:formatedErrors});
    }

    if(err instanceof DataBaseConnectionError){
        console.log('Handling this error as databse');
    }
}