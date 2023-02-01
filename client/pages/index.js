import Document from "../layouts/Document";


const Index = ({ color }) =>{
  
   console.log('Im inside the component',color);
   return (
    <>
  
         <Document>
           
         </Document>
    </>
      
   );
     
}


Index.getInitialProps = () => {


   console.log('Im on server');
   return {color:'red'};

};

export default Index;