import express from 'express';
import {json} from 'body-parser';

const app = express();
app.use(json());


app.get('/api/users/current',(req,res) =>{
        res.send('hi there')
});

app.listen(3000,() =>{

      console.log('listen on 3000 jjhh');
});