import { CustomError } from "./CustomError";

export class NotFound extends CustomError {

      statusCode = 404;

      constructor(){

        super('Route not found');
        Object.setPrototypeOf(this,NotFound.prototype);
      }

      serializeErrors() {
          
        return [{
             message:'Not found'
        }]
      }
}
