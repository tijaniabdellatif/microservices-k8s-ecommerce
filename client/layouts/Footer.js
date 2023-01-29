import Logo from "../components/Logo";
import { UilFacebookF,UilLinkedinAlt, UilYoutube,UilTwitterAlt } from '@iconscout/react-unicons'
import Link from "next/link";

const Footer = () => {
    return (
      <footer className="bg-white pt-16 pb-12 border-t border-gray-200">

        <div className="container">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                  <div className="space-y-8 xl:col-span-1">
                    <Logo />
                    <p className="text-gray-500 text-base font-quicksand">
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
            </div>
        </div>
        
      </footer>
    );
  };

  export default Footer;