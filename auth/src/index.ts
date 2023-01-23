import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import mongoose, { mongo } from 'mongoose';
import cookieSession from 'cookie-session';

import { currentUserRouter } from './routes/current';
import { userLogOut } from './routes/logout';
import { userLogin } from './routes/login';
import { userRegister } from './routes/register';
import { errorHandler } from './middlewares/ErrorHandler';
import { NotFound } from './errors/NotFound';

const app = express();
app.settings('trust proxy',true);
app.use(json());
app.use(cookieSession({

    signed:false,
    secure:true

}));
app.use(currentUserRouter);
app.use(userLogin);
app.use(userLogOut);
app.use(userRegister);

app.all('*',async (req,res,next) =>{
  next(new NotFound());
})

app.use(errorHandler);

const start = async () =>{

  try{
    
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth',{
      family: 4,
    });
  console.log('connected to monggodb')
  }catch(error){

      console.error(error);
  }

app.listen(3000,() =>{
    console.log('listen on 3000');
 });
 
}

start();

