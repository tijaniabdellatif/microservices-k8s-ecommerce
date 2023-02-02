import Document from "../layouts/Document";
import axios from 'axios';
import { useState,useLayoutEffect,useRef } from "react";

const Index = ({currentUser}) =>{
  
   const [current,setCurrent] = useState(null);
   const firstUpdate = useRef(true);

   useLayoutEffect(() => {

      if (firstUpdate.current) {
         firstUpdate.current = false;
         return;
       }

       setCurrent({currentUser});
       
    
    },[currentUser]);

    console.log(current);
   
   
   return (
    <>
  
         <Document>
           <h1> Hello world :  </h1>
         </Document>
    </>
      
   );
     
}




Index.getInitialProps = async (context) => {
  
   
       if(context.req){
          
            const response = await axios.get('http://ingress-nginx-controller.ingress-nginx/api/users/current',{
              headers:context.req.headers
            }).catch(error =>{

                 console.log('this is my error ',error);
            })

            if(response){

                  return response.data;
            }
            else {

                 return {};
            }
       }

       else {

         
          const {data} = await axios.get('/api/users/current');

            return data ? data:{};
       
       }
      

      }
 

export default Index;