import request from 'supertest';
import {app} from '../../app';

it('fails when email does not exists',async () => {

    await request(app)
    .post('/api/users/login')
    .send({
        email:'test@test.com',
        password:'qazxswedc12'
    }).expect(400);
    
});

it('fails when incorrect password',async () => {

    await request(app)
    .post('/api/users/register')
    .send({
        name:'tijani abdellatif',
        email:'test@test.com',
        password:'qazxswedc12'
    }).expect(201);


    await request(app)
    .post('/api/users/login')
    .send({
        email:'test@test.com',
        password:'qazxswedc1'
    }).expect(400);
    
});

it('response with a cookie when given valid credentials',async () => {

    await request(app)
    .post('/api/users/register')
    .send({
        name:'tijani abdellatif',
        email:'test@test.com',
        password:'qazxswedc12'
    }).expect(201);


    const response = await request(app)
    .post('/api/users/login')
    .send({
        email:'test@test.com',
        password:'qazxswedc12'
    }).expect(200);

    expect(response.get('Set-Cookie')).toBeDefined();
    
});