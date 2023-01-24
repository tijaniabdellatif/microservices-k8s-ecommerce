import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import cookieSession from 'cookie-session';
import { currentUserRouter } from './routes/current';
import { userLogOut } from './routes/logout';
import { userLogin } from './routes/login';
import { userRegister } from './routes/register';
import { NotFound } from './errors/NotFound';
import { errorHandler } from './middlewares/ErrorHandler';

const app = express();
app.set('trust proxy', true);
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

export { app };