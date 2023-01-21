import express,{Request,Response} from 'express';
import { body,validationResult,check } from 'express-validator';
import bcrypt from 'bcryptjs';
import jsonwebtoken from "jsonwebtoken";


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
         throw new Error('Invalid email or password');
    }
   
    const {name,email,password} = req.body;
    

    console.log('Creating a user');
    throw new Error('Cannot connect to db');
    res.send({})


});

export { router as userRegister };