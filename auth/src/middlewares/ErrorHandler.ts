import {Request,Response,NextFunction} from 'express';
import { RequestValidationError } from '../errors/RequestValidation';
import { DataBaseConnectionError } from '../errors/DatabaseError';
export const errorHandler = (err: Error,req:Request,res:Response,next:NextFunction) =>{
    if(err instanceof RequestValidationError){
          
         return res.status(400).send({errors: err.serializeErrors()});
    }

    if(err instanceof DataBaseConnectionError){
        
        return res.status(500).send({
            errors:err.serializeErrors()
        });
    }

    res.status(400).send({
            errors:[{
                message:"Something went wrong"
            }]
    });
}