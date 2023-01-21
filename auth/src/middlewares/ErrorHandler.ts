import {Request,Response,NextFunction} from 'express';
import { RequestValidationError } from '../errors/RequestValidation';
import { DataBaseConnectionError } from '../errors/DatabaseError';
export const errorHandler = (err: Error,req:Request,res:Response,next:NextFunction) =>{
    if(err instanceof RequestValidationError){
          console.log('handling an error as a request');
    }

    if(err instanceof DataBaseConnectionError){
        console.log('HAndling this error as databse');
    }

    res.status(400).send({
            message:err.message
    });
     
      

}