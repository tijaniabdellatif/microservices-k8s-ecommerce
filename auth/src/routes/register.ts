import express,{Request,Response} from 'express';
import { body,validationResult } from 'express-validator';
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
    const errors = validationResult(req);
    if(!errors.isEmpty()){

          return res.status(400).send(errors.array());
    }
    
    const { email , pasword} = req.body;

    console.log('creating user');

    res.send({});


});

export { router as userRegister };