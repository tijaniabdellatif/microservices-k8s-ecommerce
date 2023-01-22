export class DataBaseConnectionError extends Error {
    statusCode = 500;
    reason = 'Error connecting to database';
    constructor(){
        super();
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