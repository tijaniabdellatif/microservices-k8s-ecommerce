import Link from "next/link";
import{UserGroupIcon,UserAddIcon} from "@heroicons/react/solid";
import { LogOut } from 'react-feather';
import useRequest from "../../hooks/useRequest";
import  { useRouter } from "next/router";
import { toast } from 'react-toastify';

const Items = ({current}) =>{

const router = useRouter();



 const {doRequest,errors,loader} = useRequest({
   
    url:'/api/users/logout',
    method:'post',
    onSuccess : () => {

        if(!errors){

             toast.warning('Waiting for action');
             setTimeout(() =>{
              redirectPage();
             },1000)
            
        }
    }

 });

 const redirectPage = () => {

    if(errors){

       toast.error('Something went wrong !!');
       router.reload();
    }

    else {

        router.reload();

        
    }
 }

const handleClick = async () => {
       doRequest();
}




const links = [

    !current && {id:1,label:"Sign up",href:'/auth/register',icon:<UserAddIcon className="h-6 h-6 text-dark-secondary dark:text-white group-hover:text-light-cta" />},
    !current && {id:2,label:"Sign In",href:'/auth/login',icon:<UserGroupIcon className="h-6 h-6 text-dark-secondary dark:text-white group-hover:text-light-cta" />},
     current && {id:3,label:'Sign Out',href:'/auth/logout',icon:<LogOut className="h-6 h-6 text-dark-secondary dark:text-white group-hover:text-light-cta" />},
].filter(linkConfig => linkConfig)
.map(({id,label,href,icon}) =>{


  if(href === '/auth/logout'){

    return (
  
      <Link key={id} href='#' onClick={handleClick} className="flex items-center group gap-3" passHref>
     
        {icon}
        <span className="font-quicksand text-sm leading-3 font-medium group-hover:text-light-cta">{label}</span>
     
        
        </Link>
       
     );
  }

   return (
  
    <Link key={id} className="flex items-center group gap-3">
      {icon}
      <span className="font-quicksand text-sm leading-3 font-medium group-hover:text-light-cta">{label}</span>
      </Link>
     
   );

});

return(
    <div className="flex justify-between gap-4">
      {links}
    </div>
);
     
      
      

};

export default Items;