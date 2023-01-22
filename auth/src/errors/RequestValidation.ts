import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {

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

