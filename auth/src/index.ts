import express from 'express';
import {json} from 'body-parser';
import { currentUserRouter } from './routes/current';
import { userLogOut } from './routes/logout';
import { userLogin } from './routes/login';
import { userRegister } from './routes/register';

const app = express();
app.use(json());

app.use(currentUserRouter);
app.use(userLogin);
app.use(userRegister);
app.use(userLogOut);


app.listen(3000,() =>{

      console.log('listen on 3000');
});