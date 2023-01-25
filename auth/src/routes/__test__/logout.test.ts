import request from 'supertest';
import {app} from '../../app';

it('clears cookie after logout',async () =>{

    await request(app)
    .post('/api/users/register')
    .send({

        name:'tijani abdellatif',
        email:'test@test.com',
        password:'qazxswedc12'

    }).expect(201);

    const response = await request(app)
    .post('/api/users/logout')
    .send({

    }).expect(200);

    /**
     * console.log(response.get('Set-Cookie'))
     */
   expect(response.get('Set-Cookie')[0]).toEqual(

    'session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly'
   )

})