import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useRouter } from 'next/router';
import {removeDuplicates} from "../helpers/functions"

export default ({url,method,body,route}) =>{

    const [errors,setErrors] = useState(null);
    const [loader,setLoader]=useState(false);
    const router = useRouter();

    const doRequest = async () =>{


          try{
                setErrors(null);
                setLoader(true);
                const response = await axios[method](url,body);
                setLoader(false);
                toast.success('Accounted created',{

                    position: toast.POSITION.TOP_RIGHT,
                  
                });
                router.push(route);

                return response.data;


          }catch(err){

        setLoader(true);
        const errorsArray = removeDuplicates(err.response.data.errors,'field');
         setErrors(errorsArray);

         setTimeout(() =>{
              setLoader(false);
         },2000)
          }

    }

    return {doRequest,errors,loader}

}