import {useTheme} from "next-themes";
import{SunIcon ,MoonIcon,UserGroupIcon,SearchIcon,UserAddIcon,UserCircleIcon} from "@heroicons/react/solid";
import {useState, useEffect} from "react";

import Link from 'next/link'
const CustomThemeChange = ({children,currentUser}) => {

    const {systemTheme , theme, setTheme} = useTheme ();
    const [mounted, setMounted] = useState(false);
    const [user,setUser] = useState(null);

    useEffect(() =>{
       
        
        setMounted(true);

        if(currentUser !==  null){

           setUser(currentUser);
        }
        
      },[mounted])

    
    const renderThemeChanger= () => {
        if(!mounted) return null;
        const currentTheme = theme === "system" ? systemTheme : theme ;

        console.log('current theme : ',currentTheme)
        if(currentTheme ==="dark"){
          return (
            <SunIcon className="w-6 h-6 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
          )
        }

        else {
          return (
            <MoonIcon className="w-6 h-6 text-dark-secondary " role="button" onClick={() => setTheme('dark')} />
          )
        }
     };

     return (
        <header className="h-15 shadow-sm bg-light-secondary dark:bg-dark-secondary dark:border-gray-700 lg:bg-light-primary">
          <div className="container px-4 sm:px-6 py-4 flex justify-between items-center">
            {children}
            <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden font-quicksand">
            <SearchIcon className="w-5 h-6 text-dark-tertiary absolute left-3 top-1 text-lg" role="button"/>
            <input className="pl-12 h-8 w-full border border-r-0 border-light-cta py-3 px-3 rounded-1-md 
            focus:ring-light-cta
            " placeholder="Search" />
            <button className="bg-light-cta border border-light-cta text-white px-8 font-medium rounded-r-md
            hover:bg-transparent hover:dark:bg-white hover:text-dark-primary transition
            ">Search</button>
            </div>

           
            <div className="flex justify-between align-center">

             {
              user  ?  <div className="flex justify-between align-center gap-4">
              <Link href="#" className="flex items-center group gap-3">
              <UserCircleIcon className="h-6 h-6 text-dark-secondary dark:text-white group-hover:text-light-cta" />
                <span className="font-quicksand text-sm leading-3 font-medium group-hover:text-light-cta">{user.email}</span>
                </Link>
            </div> :   <div className="flex justify-between gap-4">
              <Link href="/auth/login" className="flex flex-col group">
              <UserGroupIcon className="h-6 h-6 text-dark-secondary dark:text-white group-hover:text-light-cta" />
                <span className="font-quicksand text-sm leading-3 font-medium group-hover:text-light-cta">Sign in</span>
                </Link>
              
              <Link href="/auth/register" className="flex flex-col group">
                <UserAddIcon className="h-6 h-6 text-dark-secondary  dark:text-white group-hover:text-light-cta" />
                <span className="font-quicksand text-sm leading-3 font-medium group-hover:text-light-cta">Sign up</span>
                </Link>
            </div>
             }
          

            <div className="flex gap-4 ml-5">
            {renderThemeChanger()}
            </div>
           
            </div>
           
            
          </div>
        </header>
      );

      
}

export default CustomThemeChange;