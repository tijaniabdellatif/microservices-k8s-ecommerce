import axios from 'axios';

export default ({req}) =>{

      if(req){

        console.log('on server');

            return axios.create({

                    baseURL:'http://10.1.2.58:3000',
                    headers:req.headers

            });
      }
      else {
        console.log('on browser')
          return axios.create({

              baseURL : "/",
             
          })

      }
}