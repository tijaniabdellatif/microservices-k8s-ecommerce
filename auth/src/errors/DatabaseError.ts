export class DataBaseConnectionError extends Error {
    reason = 'Error connecting to database';
    constructor(){
        super();
        Object.setPrototypeOf(this,DataBaseConnectionError.prototype)
    }
}