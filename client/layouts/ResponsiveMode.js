import Link from "next/link";
import { UilBars ,UilShoppingCartAlt, UilChartGrowthAlt,UilSearch} from '@iconscout/react-unicons';


const ResponsiveMode = () => {

      return (
        <>
            <div className="fixed w-full border-t border-gray-200 shadow-sm
            bg-white py-3 bottom-0 left-0 flex justify-around items-start px-6 lg:hidden">

                <Link href="#" className="block text-center text-gray-700 hover:text-light-cta transition relative">
                        <div className="text-2xl font-quicksand">
                            <UilBars />
                            <div className="text-center text-xs font-quicksand leading-3">
                                Menu
                            </div>
                        </div>
                </Link>

                <Link href="#" className="block text-center text-gray-700 hover:text-light-cta transition relative">
                        <div className="text-2xl font-quicksand">
                            <UilChartGrowthAlt />
                            <div className="text-center text-xs font-quicksand leading-3">
                                Packs
                            </div>
                        </div>
                </Link>

                <Link href="#" className="block text-center text-gray-700 hover:text-light-cta transition relative">
                        <div className="text-2xl font-quicksand">
                            <UilSearch />
                            <div className="text-center text-xs font-quicksand leading-3">
                                Search
                            </div>
                        </div>
                </Link>

                <Link href="#" className="block text-center text-gray-700 hover:text-light-cta transition relative">
                        <div className="text-2xl font-quicksand">
                            <UilShoppingCartAlt />
                            <div className="text-center text-xs font-quicksand leading-3">
                                Shopping Cart
                            </div>
                        </div>
                </Link>

            </div>
        </>
      );
    };

    export default ResponsiveMode;