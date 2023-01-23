
import express,{Request,Response} from 'express';
import { body } from 'express-validator';
import { BadRequestError } from '../errors/BadRequestError';
import { validateRequest } from '../middlewares/ValidateRequest';
import { PasswordHash } from '../services/PasswordHash';
import { User } from '../models/User';
import jsonwebtoken from 'jsonwebtoken';
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

    const {email,password} = req.body;

    const signedUser = await User.findOne({email});

    if(!signedUser){

        throw new BadRequestError('Invalid credentials');

    }

    const passwordMatch = await PasswordHash.compare(signedUser.password,password);

    if(!passwordMatch){
          throw new BadRequestError('Incorrect Password');
    }

                const jwt = jsonwebtoken.sign({
                    id:signedUser.id,
                    email:email
                },
                    process.env.jwt!
            
                );

                /**
                 * Store the jwt on session object
                 */
                req.session = {
                    jwt : jwt
                };
                res.status(200).send(signedUser);
    
    
});

export { router as userLogin };