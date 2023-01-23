
import express,{Request,Response} from 'express';
import { validationResult,body } from 'express-validator';
import { RequestValidationError } from '../errors/RequestValidation';
const router = express.Router();

router.post('/api/users/login',[
    
    body('email')
     .isEmail()
     .withMessage('provide an email'),

    body('password')
    .trim()
    .notEmpty()
    .withMessage('Please supply a password')
],async (req:Request,res:Response) => {

      const errors = validationResult(req);

      console.log(errors);
      if(!errors.isEmpty()){
        throw new RequestValidationError(errors.array());
    }

});

export { router as userLogin };