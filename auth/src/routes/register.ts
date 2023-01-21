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

   

],async (req: Request,res: Response) => {
   
     const errors = validationResult(req);

    if(!errors.isEmpty()){
         throw new Error('Invalid email or password');
    }
   
    const {name,email,password} = req.body;

    try{

        const user : {name:string,email:string,password:string} = {

              name:'tijani abdellatif',
              email:'a.tijani@gmail.com',
              password:'qazwsxedc'

        }

        const avatar = gravatar.url(email,{

            s: '200',
            r: 'pg',
            d: 'mm'
        });


        const salt = await bcrypt.genSalt(10);
        let newpass = await bcrypt.hash(password,salt);

        /* Implemeting json webtokenn */        
        res.status(200).json({

             message: "Success",
             password: newpass
        })

    }catch(error){

        throw new Error('Error connecting to the database');

    }




});

export { router as userRegister };