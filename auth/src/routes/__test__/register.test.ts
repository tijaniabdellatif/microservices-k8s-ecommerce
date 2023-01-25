import request from 'supertest';
import {app} from '../../app';

it('returns 201 on success',async () => {

      return request(app)
      .post('/api/users/register')
      .send({
          name:'test test',
          email:'test@test.com',
          password:'qazxswedc12'
      }).expect(201);
      
})