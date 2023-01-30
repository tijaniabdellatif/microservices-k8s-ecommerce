import Logo from "../components/Logo";
import { UilFacebookF,UilLinkedinAlt, UilYoutube,UilTwitterAlt } from '@iconscout/react-unicons'
import Link from "next/link";

const Footer = () => {
    return (
      <>
      <footer className="bg-white dark:bg-dark-secondary pt-16 pb-12 border-t border-gray-200">

        <div className="container">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                  <div className="space-y-8 xl:col-span-1">
                    <Logo />
                    <p className=" dark:text-white text-gray-500 text-base font-quicksand">
                      lorem ipsum data himorit flask flesh
                    </p>

                    <div className="flex space-x-5">
                      <Link href="#">
                        <UilFacebookF className="text-gray-300 cursor-pointer hover:text-blue-200 transition duration-300" />
                      </Link>

                      <Link href="#">
                        <UilYoutube className="text-gray-300 cursor-pointer hover:text-blue-200 transition duration-300" />
                      </Link>

                      <Link href="#">
                        <UilLinkedinAlt className="text-gray-300 cursor-pointer hover:text-blue-200 transition duration-300" />
                      </Link>

                      <Link href="#">
                        <UilTwitterAlt className="text-gray-300 cursor-pointer hover:text-blue-200 transition duration-300" />
                      </Link>

                    </div>
                  </div>

                  <div className=" mt-12 grid grid-cols-2 gap-8 xl:mt-0
                  xl:col-span-2">

                    <div className="md:grid md:grid-cols-2 md:gap-8">

                            <div className="font-quicksand ">
                              <h3 className="dark:text-white text-sm font-quicksand font-semibold text-gray-400
                              tracking-wide uppercase">Solutions</h3>

                              <div className="mt-4 space-y-4">
                                <Link href="#" className="text-base text-gray-500 hover:text-white block font-semibold"> 
                                Marketing
                                </Link>

                                <Link href="#" className="text-base text-gray-500 hover:text-gray-900 block font-semibold"> 
                                Marketing
                                </Link>

                                <Link href="#" className="text-base text-gray-500 hover:text-gray-900 block font-semibold"> 
                                Marketing
                                </Link>

                                <Link href="#" className="text-base text-gray-500 hover:text-gray-900 block font-semibold"> 
                                Marketing
                                </Link>
                              </div>
                            </div>

                            <div className="font-quicksand mt-12 md:mt-0">
                              <h3 className="text-sm font-quicksand font-semibold text-gray-400
                              tracking-wide uppercase">Solutions</h3>

                              <div className="mt-4 space-y-4">
                                <Link href="#" className="text-base text-gray-500 hover:text-gray-900 block font-semibold"> 
                                Marketing
                                </Link>

                                <Link href="#" className="text-base text-gray-500 hover:text-gray-900 block font-semibold"> 
                                Marketing
                                </Link>

                                <Link href="#" className="text-base text-gray-500 hover:text-gray-900 block font-semibold"> 
                                Marketing
                                </Link>

                                <Link href="#" className="text-base text-gray-500 hover:text-gray-900 block font-semibold"> 
                                Marketing
                                </Link>
                              </div>
                            </div>   
                    </div>


                    <div className="md:grid md:grid-cols-2 md:gap-8">

<div className="font-quicksand">
  <h3 className="text-sm font-quicksand font-semibold text-gray-400
  tracking-wide uppercase">Solutions</h3>

  <div className="mt-4 space-y-4">
    <Link href="#" className="text-base text-gray-500 hover:text-gray-900 block font-semibold"> 
    Marketing
    </Link>

    <Link href="#" className="text-base text-gray-500 hover:text-gray-900 block font-semibold"> 
    Marketing
    </Link>

    <Link href="#" className="text-base text-gray-500 hover:text-gray-900 block font-semibold"> 
    Marketing
    </Link>

    <Link href="#" className="text-base text-gray-500 hover:text-gray-900 block font-semibold"> 
    Marketing
    </Link>
  </div>
</div>

<div className="font-quicksand mt-12 md:mt-0">
  <h3 className="text-sm font-quicksand font-semibold text-gray-400
  tracking-wide uppercase">Solutions</h3>

  <div className="mt-4 space-y-4">
    <Link href="#" className="text-base text-gray-500 hover:text-gray-900 block font-semibold"> 
    Marketing
    </Link>

    <Link href="#" className="text-base text-gray-500 hover:text-gray-900 block font-semibold"> 
    Marketing
    </Link>

    <Link href="#" className="text-base text-gray-500 hover:text-gray-900 block font-semibold"> 
    Marketing
    </Link>

    <Link href="#" className="text-base text-gray-500 hover:text-gray-900 block font-semibold"> 
    Marketing
    </Link>
  </div>
</div>   
                    </div>

                  </div>
            </div>
        </div>
        
      </footer>

      <div className="bg-dark-secondary dark:bg-light-cta py-4 font-quicksand">
        <div className="container flex items-center justif-center">
          <p className="text-white ">&copy; Multilist {new Date().getFullYear()}</p>

         
        </div>
      </div>
      </>
    );
  };

  export default Footer;