import Image from 'next/image';
import MyImage from '../../public/images/big.jpeg';
const CategoriesFeature = () =>{

      return(
        <div className="container pb-16">
           <h2 className="font-quicksand text-2xl md:text-3xl font-medium text-dark-cta mb-6">Shop by Category</h2>
           <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
               <div className="group rounded-sm overflow-hidden">
               <Image src={MyImage} className='w-300 h-200 rounded-sm' />
               </div>
           </div>
        </div>
      );
}
export default CategoriesFeature;