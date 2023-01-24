import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { notAuthorizedError } from "../errors/AuthorizationError";


export const authAccess = (req:Request,res:Response,next:NextFunction) => {
      if(!req.currentUser){
          throw new notAuthorizedError();
      }

      next();

     
}