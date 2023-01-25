import {MongoMemoryServer} from 'mongodb-memory-server';
import mongoose from 'mongoose';
import {app} from "../app";
import request from 'supertest';

let mongo: any;
/**
 * Global scoope function
 * making a helper to register a user in the test env
 */
declare global {
    var register: () => Promise<string[]>;
}


beforeAll(async () =>{
    process.env.jwt = 'mysecrettoken';
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

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


global.register =async () => {
    
     const email = 'test@test.com';
     const password = 'qazwsxedc12';
     const name = 'tijani abdellatif';

     const response = await request(app)
     .post('/api/users/register')
     .send({
         email,password,name
     })
     .expect(201);

     const cookie = response.get('Set-Cookie');

     return cookie;

}