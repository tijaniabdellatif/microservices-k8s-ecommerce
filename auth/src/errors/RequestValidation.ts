import { ValidationError } from "express-validator";

interface CustomError {

    statusCode:number;
    serializeErrors(): {
    
            message:string,
            field?:string

    }[]

}

export class RequestValidationError extends Error implements CustomError {

    statusCode = 400;
    constructor(public errors: ValidationError[]){
           super();
           /* Implementing */
           Object.setPrototypeOf(this,RequestValidationError.prototype);


    }

    serializeErrors(){

        return this.errors.map(erno =>{

             return {message:erno.msg,field:erno.param}
        });
    }

}

