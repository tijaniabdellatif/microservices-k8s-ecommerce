import { useEffect, useState } from "react";
import Document from "../layouts/Document";
import { toast } from 'react-toastify';
export async function getServerSideProps(context){
   if(typeof window === 'undefined'){
      const response = await fetch('http://10.109.202.122:3000/api/users/current',{
         headers:context.req.headers,
         method:'GET',
         cache:'no-store'
      });
      const currentUser = await response.json();

      return {
           props:{
              currentUser
           }
      }
   }

   else {

      const response = await fetch('/api/users/current',{

      headers:context.req.headers,
      method:'GET'
   });
   const currentUser = await response.json();

   console.log(currentUser);

   return {
        props:{

            currentUser
        }
   }

   }
     
}





const Index =  ({currentUser}) =>{

   const [authorized,setAuthorized] = useState(true);

   useEffect(() =>{

        if(currentUser.errors){

            setAuthorized(false);
            toast.error(currentUser.errors[0].message);


        }

        setAuthorized(true);
        
   },[authorized]);
   
   return (

      <Document>
         <h1>{currentUser.currentUser ? <>YES</>:<>NO</>}</h1>
      </Document>
   );
}

 

export default Index;