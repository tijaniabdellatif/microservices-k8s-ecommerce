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
      
});

it('return 400 with an invalid email',async () =>{

    return request(app)
    .post('/api/users/register')
    .send({
        name:'test test',
        email:'test@test',
        password:'qazxswedc12'
    }).expect(400);

});

it('return 400 with an invalid password',async () =>{

    return request(app)
    .post('/api/users/register')
    .send({
        name:'test test',
        email:'test@test.ma',
        password:'qazxswedc'
    }).expect(400);

});

it('return 400 with an empty name',async () =>{

    return request(app)
    .post('/api/users/register')
    .send({
        name:'',
        email:'test@test.ma',
        password:'qazxswedc'
    }).expect(400);

});

it('return 400 with missing email and password and name',async () =>{

    await request(app)
    .post('/api/users/register')
    .send({
       name:'test test'
    }).expect(400);

    await request(app)
    .post('/api/users/register')
    .send({
       email:'tijani@tijani.ma'
    }).expect(400);

    await request(app)
    .post('/api/users/register')
    .send({
       email:'test@test.ma',
       name:'test test'
    }).expect(400);

});


it('disallows duplicate emails',async () =>{
  await request(app)
  .post('/api/users/register')
  .send({
      name:'tijani abdellatif',
      email:'tijani@tijani.ma',
      password:'qazwsxedc12'
  }).expect(201)

  await request(app)
  .post('/api/users/register')
  .send({
      name:'tijani abdellatif',
      email:'tijani@tijani.ma',
      password:'qazwsxedc12'
  }).expect(400)


});


it('sets a cookie after success register',async ()=>{
    const response = await request(app)
    .post('/api/users/register')
    .send({
        name:'tijani abdellatif',
        email:'tijani@tijani.ma',
        password:'qazwsxedc12'
    }).expect(201);

    /**
     * Inspect response data if contain cookie headers
     */
    expect(response.get('Set-Cookie')).toBeDefined();

})

