// import Document from "../../layouts/Document";
// import Link from "next/link";
// import { useState,useRef, useEffect} from "react";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import useRequest from "../../hooks/useRequest";
// import { useRouter } from 'next/router';

// function Login(){

//   const [password,setPassword] = useState('');
//   const [email,setEmail] = useState('');
//   const firstUpdate = useRef(true);
//   const [isError,setIsError] = useState(false);
//   const router = useRouter();

//   const {doRequest,errors,loader} = useRequest({
//     url:'/api/users/login',
//     method:'post',
//     body:{
//         email,password
//     },
//     onSuccess : () => router.push('/')
// });
 
//  const onSubmit = async (event) =>{
//    event.preventDefault();
//    await doRequest();
//  }

//  useEffect(() => {
//   if (firstUpdate.current) {
//     firstUpdate.current = false;
//     return;
//   }

//   if(!errors){
//       setIsError(false);
//       return;
//   }

//     setIsError(true);
//     errors.forEach(it=>{
//         toast.error(it.message,{
//           position: toast.POSITION.TOP_RIGHT,
//           delay: 500
//         });
//     })
// },[errors]);

// const onInput = () => {
//     if(errors){
//        setIsError(false);
//     }   
// }
//     return (
     
//         <>
//           <Document>
         

//                 <div className="container py-16">
//                     <div className="font-quicksand dark:bg-white max-w-lg mx-auto px-6 py-7 shadow rounded overflow-hidden ">
//                         <h2 className="text-2xl dark:text-light-cta  uppercase font-medium mb-1">Login</h2>
//                         <p className="text-sm leading-3 text-gray-400 mb-6 dark:text-gray-800">Login if you are a customer ?</p>

//                         <form onSubmit={onSubmit}>

//                             <div className="space-y-4">
//                                 <div>
//                                     <label htmlFor="email" className="text-gray-600 mb-2 block">Email Address
//                                     <span className="text-dark-danger mx-1">*</span>
//                                     </label>
//                                     <input placeholder="example@example.org" onInput={onInput} value={email} onChange={e=>setEmail(e.target.value)} type="email" className={isError ? 'input-box-error':'input-box'} />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="password" className="text-gray-600 mb-2 block">Password
//                                     <span className="text-dark-danger mx-1">*</span>
//                                     </label>
//                                     <input placeholder="8 minimum length, number included" type="password" onInput={onInput} value={password} onChange={e => setPassword(e.target.value)} className={isError ? 'input-box-error':'input-box'} />
//                                 </div>
//                             </div>

//                             <div className="space-y-4 flex items-center justify-between mt-6">
//                                 <div className="flex items-center">
//                                     <input id="agree" type="checkbox" className="text-dark-cta focus:ring-1
//                                     rounded-sm cursor-pointer" />
//                                     <label htmlFor="agree" className="text-gray-400 ml-2 cursor-pointer">Remember me</label>
//                                 </div>

//                                <Link href="#" className="text-dark-danger">Forgot password ?</Link>
//                             </div>

//                             <div className="mt-4">
//                                     <button type="submit" className="block w-full py-2 text-center text-white font-quicksand bg-light-cta border border-light-cta rounded hover:bg-transparent hover:text-dark-cta transition uppercase font-medium">
//                                     {loader ? <>
//                                             <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                             <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
//                                             <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
//                                             </svg>
//                                             Proccessing...
//                                          </>:<>Login</>}
//                                     </button>
//                             </div>

//                             <div className="mt-6 flex justify-center relative">

//                                 <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200">

//                                 </div>

//                                 <div className="text-gray-600 uppercase px-3 bg-white relative z-20">
//                                    Already a member ?
//                                 </div>

//                             </div>

//                             <div className="mt-4 flex gap-4">
//                                 <Link href="/auth/register" className="block w-1/2 p-2 text-center border text-white dark:text-light-cta bg-dark-secondary hover:bg-light-secondary hover:text-dark-secondary hover:border-dark-secondary rounded uppercase font-quicksand font-medium text-sm transition">
//                                     Signup
//                                 </Link>

//                                 <Link href="#" className="block w-1/2 p-2 text-center border text-white bg-dark-danger  hover:bg-light-secondary hover:text-dark-danger hover:border-dark-danger rounded uppercase font-quicksand font-medium text-sm transition">
//                                     Google
//                                 </Link>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//           </Document>

         
//         </>
      
//     );
// }



// export default Login;

export default function Login(){


     return(<h1>Login page</h1>);
}