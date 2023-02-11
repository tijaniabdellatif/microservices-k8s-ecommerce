// import { useEffect,useRef,useState } from "react";
// import useRequest from "../../hooks/useRequest";
// import { useRouter } from 'next/router';

// export default () =>{
//     const router = useRouter();
//     const firstUpdate = useRef(true);
//      const [isError,setIsError] = useState(false);
//     const {doRequest,errors,loader} = useRequest({
//         url:'/api/users/logout',
//         method:'post',
//         body:{},
//         onSuccess : () => router.push('/')
//     });

//     useEffect(() => {
//           doRequest();
//       },[]);
     

//     return(<div>

//         Signing out ....
//     </div>);
// }