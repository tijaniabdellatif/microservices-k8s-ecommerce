import {MongoMemoryServer} from 'mongodb-memory-server';
import mongoose from 'mongoose';
import {app} from '../app';

let mongo: any;
beforeAll(async () =>{
    process.env.jwt = 'mysecrettoken';
    mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();
    await mongoose.connect(mongoUri,{

        family:4
    });

});

beforeEach(async() =>{
    const collections = await mongoose.connection.db.collections();
    for(let collection of collections){
          await collection.deleteMany({})
    }
});

afterAll( async () =>{
     if(mongo){
        await mongo.stop();
     }
     
      await mongoose.connection.close();
})