import express,{Request,Response} from 'express';
import { body,validationResult,check } from 'express-validator';
import bcrypt from 'bcryptjs';
import jsonwebtoken from "jsonwebtoken";
import { User } from '../models/User';
import { RequestValidationError } from '../errors/RequestValidation';
import { BadRequestError } from '../errors/BadRequestError';


const router = express.Router();

router.post('/api/users/register',[

   check('name','Name is required')
    .not().isEmpty(),

    check('email','Please include a valid email')
    .optional({ checkFalsy: true, nullable: true })
     .isEmail(),

     check('password', 'The password must be 5+ chars long and contain a number')
    .not()
    .isIn(['password', '123456', 'godthing'])
    .withMessage('Do not use a common word as the password')
    .isLength({ min: 5 , max:20})
    .matches(/\d/)

   

], async (req: Request,res: Response) => {
   
     const errors = validationResult(req);

    if(!errors.isEmpty()){

        throw new RequestValidationError(errors.array());
    }

      const {email,password,name} = req.body;
      const existingUser = await User.findOne({email});
      if(existingUser){  
         throw new BadRequestError('Email in use');
      }

      const user = User.build({email,password,name});
      console.log(user);
      await user.save();
      res.status(201).send(user);

  });

export { router as userRegister };