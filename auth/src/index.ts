import express from 'express';
import {json} from 'body-parser';
import { currentUserRouter } from './routes/current';
import { userLogOut } from './routes/logout';
import { userLogin } from './routes/login';
import { userRegister } from './routes/register';
import { errorHandler } from './middlewares/ErrorHandler';
import { NotFound } from './errors/NotFound';
const app = express();
app.use(json());
app.use(currentUserRouter);
app.use(userLogin);
app.use(userLogOut);
app.use(userRegister);

app.all('*',() =>{
   throw new NotFound();
})
app.use(errorHandler);


app.listen(3000,() =>{

      console.log('listen on 3000');
});