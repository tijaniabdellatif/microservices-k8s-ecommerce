import axios from 'axios';

export default ({req}) =>{

      if(req && typeof window === 'undefined'){

            return axios.create({

                    baseURL:'http://ingress-nginx-controller.ingress-nginx',
                    headers:req.headers

            });
      }
      if(!req) {
          return axios.create({

              baseURL : "/",
              headers:req.headers
          })

      }
}