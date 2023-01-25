import request from 'supertest';
import {app} from '../../app';

it('get current users details',async ()=>{

    const authresponse = await request(app)
    .post('/api/users/register')
    .send({

        name:'tijani abdellatif',
        email:'test@test.com',
        password:'qazxswedc12'

    }).expect(201);

    const cookie = authresponse.get("Set-Cookie");

   const response =  await request(app)
    .get('/api/users/current')
    .set('Cookie',cookie)
    .send().expect(200);
    
    expect(response.body.currentUser.email).toEqual('test@test.com');

})