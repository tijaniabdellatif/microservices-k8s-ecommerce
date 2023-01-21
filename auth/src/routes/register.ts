import express,{Request,Response} from 'express';
import { body,validationResult,check } from 'express-validator';
import bcrypt from 'bcryptjs';
import jsonwebtoken from "jsonwebtoken";
import { RequestValidationError } from '../errors/RequestValidation';
import { DataBaseConnectionError } from '../errors/DatabaseError';
const gravatar = require('gravatar');


const router = express.Router();

router.post('/api/users/register',[

   check('name','Name is required')
    .not().isEmpty(),

    check('email','Please include a valid email')
     .isEmail(),

     check('password','Please entre a password 6 or more character')
     .isLength({min:6,max:30})

   

], (req: Request,res: Response) => {
   
     const errors = validationResult(req);

    if(!errors.isEmpty()){

         //handling the error 
        throw new RequestValidationError(errors.array());
    }
   
    const {name,email,password} = req.body;
    

    console.log('Creating a user');
    throw new DataBaseConnectionError();
    res.send({})


});

export { router as userRegister };