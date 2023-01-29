import Document from "../../layouts/Document";

function Register(){
    return (
     
        <>
          <Document>
            <h1 className="font-quicksand">hello one</h1>
            <h1 className="font-roboto">Hello two</h1>
          </Document>

         
        </>
      
    );
}

Register.getInitialProps = async (ctx) => {
  return {}
}

export default Register;
