import mongoose, { mongo } from 'mongoose';
import { app } from './app';
const start = async () =>{

  if(!process.env.jwt){
     throw new Error('Error jwt connexion');
  }
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

