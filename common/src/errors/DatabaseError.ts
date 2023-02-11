import { CustomError } from "./CustomError";

export class DataBaseConnectionError extends CustomError {
    statusCode = 500;
    reason = 'Error connecting to database';
    constructor(){
        super('Error connnecting to db');
        Object.setPrototypeOf(this,DataBaseConnectionError.prototype)
    }

    
    serializeErrors(){
        return [
            {
                message:this.reason
            }
        ];
    }
}