import Document from "../layouts/Document";
import axios from 'axios';

const Index = ({ current }) =>{
  
   // console.log(current);
    
   return (
    <>
  
         <Document>
            <h1>After Sign in</h1>
         </Document>
    </>
      
   );
     
}


Index.getInitialProps = async () => {
  
   if(typeof window === 'undefined'){

      console.log('we are on the server')
      //requiest should be mapped to ingress-ngnix

   }
   else {


        console.log('we are inside the browser')
        //request cann be made with a base url
   }
  
   return {};

};

export default Index;