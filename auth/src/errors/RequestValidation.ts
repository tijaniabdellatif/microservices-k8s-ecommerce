import { ValidationError } from "express-validator";
import { CustomError } from "./CustomError";

export class RequestValidationError extends CustomError{

    statusCode = 400;
    constructor(public errors: ValidationError[]){
           super('invalid request parametre');
           /* Implementing */
           Object.setPrototypeOf(this,RequestValidationError.prototype);


    }

    serializeErrors(){

        return this.errors.map(erno =>{
             return {message:erno.msg,field:erno.param}
        });
    }

}

