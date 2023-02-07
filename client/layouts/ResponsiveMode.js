import Link from "next/link";
import { UilBars ,UilShoppingCartAlt, UilChartGrowthAlt,UilSearch} from '@iconscout/react-unicons';


const ResponsiveMode = () => {

      return (
        <>
            <div className="fixed w-full border-t border-gray-200 shadow-sm
            bg-white dark:bg-dark-secondary py-3 bottom-0 left-0 flex justify-around items-start px-6 lg:hidden">

                <Link href="#" className="block text-center text-gray-700 dark:text-white hover:text-light-cta transition relative">
                        <div className="text-2xl font-quicksand group ">
                            <UilBars className='m-auto group-hover:text-light-cta' />
                            <div className="text-center text-xs font-quicksand leading-3 group-hover:text-light-cta">
                                Menu
                            </div>
                        </div>
                </Link>

                <Link href="#" className="block text-center dark:text-white  text-gray-700 hover:text-light-cta transition relative">
                        <div className="text-2xl font-quicksand group">
                            <UilChartGrowthAlt  className='m-auto group-hover:text-light-cta'/>
                            <div className="text-center text-xs font-quicksand leading-3 group-hover:text-light-cta">
                                Packs
                            </div>
                        </div>
                </Link>

                <Link href="#" className="block text-center dark:text-white  text-gray-700 hover:text-light-cta transition relative">
                        <div className="text-2xl font-quicksand group">
                            <UilSearch  className='m-auto group-hover:text-light-cta' />
                            <div className="text-center text-xs font-quicksand leading-3 group-hover:text-light-cta">
                                Search
                            </div>
                        </div>
                </Link>

                <Link href="#" className="block text-center dark:text-white text-gray-700 hover:text-light-cta transition relative">
                        <div className="text-2xl font-quicksand group">
                            <UilShoppingCartAlt className='m-auto group-hover:text-light-cta' />
                            <div className="text-center text-xs font-quicksand leading-3 group-hover:text-light-cta">
                                Shopping Cart
                            </div>
                        </div>
                </Link>

            </div>
        </>
      );
    };

    export default ResponsiveMode;