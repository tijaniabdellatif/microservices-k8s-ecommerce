import { CustomError } from "./CustomError";

export class notAuthorizedError extends CustomError {


       statusCode = 401;

       constructor(){

          super('Not authorized');
          Object.setPrototypeOf(this,notAuthorizedError.prototype)
       }

       serializeErrors(){

        return [{message:'Not authorized'}]
        
       }
}