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
   // console.log('Im on server');
   // const response = await axios.get('/api/users/current').catch(err =>{
   //      console.log(err);
   // })

   console.log('i was executed on the server');


   return {};

};

export default Index;