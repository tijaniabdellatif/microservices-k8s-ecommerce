import request from 'supertest';
import {app} from '../../app';

it('get current users details',async ()=>{

    /**
     * Global function created in the setup test file
     */
  const cookie = await register();

   const response =  await request(app)
    .get('/api/users/current')
    .set('Cookie',cookie)
    .send().expect(200);
    
    expect(response.body.currentUser.email).toEqual('test@test.com');

});

it('response null if not authorized',async () =>{

    const response = await request(app)
    .get('/api/users/current')
    .send()
    .expect(401);

    console.log(response.body);
    expect(response.body.currentUser).toEqual(undefined);
})