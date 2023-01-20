import express,{Request,Response} from 'express';
import { body } from 'express-validator';
const router = express.Router();

router.post('/api/users/register',[

    body('email')
    .isEmail()
    .withMessage('Email must be valid'),

    body('password')
    .trim()
    .isLength({min:5,max:20})
    .withMessage('Password must be validated')

   

],(req: Request,res: Response) => {

    const { email , pasword} = req.body;



});

export { router as userRegister };