import {useTheme} from "next-themes";
import{SunIcon ,MoonIcon,UserGroupIcon,SearchIcon} from "@heroicons/react/solid";
import {useState, useEffect} from "react";
import { HeartIcon,ShoppingCartIcon} from "@heroicons/react/outline";
import Link from 'next/link'
const CustomThemeChange = ({children}) => {

    const {systemTheme , theme, setTheme} = useTheme ();
    const [mounted, setMounted] = useState(false);

    useEffect(() =>{
        setMounted(true);
      },[])

    const renderThemeChanger= () => {
        if(!mounted) return null;
        const currentTheme = theme === "system" ? systemTheme : theme ;

        if(currentTheme ==="dark"){
          return (
            <SunIcon className="w-6 h-6 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
          )
        }

        else {
          return (
            <MoonIcon className="w-6 h-6 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
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
            <div className="space-x-4 flex items-center">
            <Link href="/auth/register" className="block text-center text-gray-700 hover:text-light-cta transition relative flex flex-col items-center">
            
             <UserGroupIcon className="w-6 h-6 text-gray-900 dark:text-white" />
             <div className="text-xs dark:text-white">Account</div>
             </Link>
           
             <Link href="#" className="block text-center text-gray-700 hover:text-light-cta transition relative flex flex-col items-center">
             <span className="absolute text-center left-7 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-dark-cta text-white text-xs
            ">5</span>
             <HeartIcon className="w-6 h-6 text-gray-900 dark:text-white" />
             <div className="text-xs dark:text-white leading-3">Wish List</div>
             </Link>
           
             <Link href="#" className="block text-center text-gray-700 hover:text-light-cta transition relative flex flex-col items-center">
             <span className="absolute text-center left-4 -top-1 w-4 h-4 rounded-full flex items-center justify-center bg-dark-cta text-white text-xs
            ">5</span>
             <ShoppingCartIcon className="w-6 h-6 text-gray-900 dark:text-white" />
             <div className="text-xs dark:text-white">Cart</div>
             </Link>
            </div>

            <div>
            {renderThemeChanger()}
            </div>
           
            
          </div>
        </header>
      );

      
}

export default CustomThemeChange;