
import express,{Request,Response} from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/ValidateRequest';
const router = express.Router();

router.post('/api/users/login',[
    
    body('email')
     .isEmail()
     .withMessage('provide an email'),

    body('password')
    .trim()
    .notEmpty()
    .withMessage('Please supply a password')
],validateRequest,async (req:Request,res:Response) => {

    


});

export { router as userLogin };