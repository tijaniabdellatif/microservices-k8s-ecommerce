import Document from "../../layouts/Document";
import Link from "next/link";

function Register(){
    return (
     
        <>
          <Document>
         

          <div className="container py-16">
                    <div className="font-quicksand dark:bg-white max-w-lg mx-auto px-6 py-7 shadow rounded overflow-hidden ">
                        <h2 className="text-2xl dark:text-light-cta  uppercase font-medium mb-1">Create An Account</h2>
                        <p className="text-sm leading-3 text-gray-400 mb-6 dark:text-gray-800">Register if you dont't have an account</p>

                        <form method="" action="">

                            <div className="space-y-4">
                            <div>
                                    <label htmlFor="name" className="text-gray-600 mb-2 block">Full name
                                    <span className="text-dark-danger mx-1">*</span>
                                    </label>
                                    <input placeholder="example@example.org" type="email" className="input-box" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-gray-600 mb-2 block">Email Address
                                    <span className="text-dark-danger mx-1">*</span>
                                    </label>
                                    <input placeholder="example@example.org" type="email" className="input-box" />
                                </div>

                                <div>
                                    <label htmlFor="password" className="text-gray-600 mb-2 block">Password
                                    <span className="text-dark-danger mx-1">*</span>
                                    </label>
                                    <input placeholder="8 minimum length, number included" type="password" className="input-box" />
                                </div>

                                <div>
                                    <label htmlFor="confirm" className="text-gray-600 mb-2 block">Confirm password
                                    <span className="text-dark-danger mx-1">*</span>
                                    </label>
                                    <input placeholder="8 minimum length, number included" type="password" className="input-box" />
                                </div>
                            </div>

                            <div className="space-y-4 flex items-center mt-6">
                                <div className="flex items-center">
                                    <input id="agree" type="checkbox" className="text-dark-cta focus:ring-1
                                    rounded-sm cursor-pointer" />
                                    <label htmlFor="agree" className="text-gray-400 ml-2 cursor-pointer">
                                      I have read and agree to the </label>
                                      <Link href="#" className="text-dark-danger font-semibold text-sm leading-2 pl-1">Term and conditions ?</Link>
                                </div>

                               
                            </div>

                            <div className="mt-4">
                                    <button type="submit" className="block w-full py-2 text-center text-white font-quicksand bg-light-cta border border-light-cta rounded hover:bg-transparent hover:text-dark-cta transition uppercase font-medium">
                                            Create Account
                                    </button>
                            </div>

                            <div className="mt-6 flex justify-center relative">

                                <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200">

                                </div>

                                <div className="text-gray-600 uppercase px-3 bg-white relative z-20">
                                   Sign up with ?
                                </div>

                            </div>

                            <div className="mt-4 flex gap-4">
                                <Link href="#" className="block w-1/2 p-2 text-center border text-white dark:text-light-cta bg-dark-secondary hover:bg-light-secondary hover:text-dark-secondary hover:border-dark-secondary rounded uppercase font-quicksand font-medium text-sm transition">
                                    Facebook
                                </Link>

                                <Link href="#" className="block w-1/2 p-2 text-center border text-white bg-dark-danger  hover:bg-light-secondary hover:text-dark-danger hover:border-dark-danger rounded uppercase font-quicksand font-medium text-sm transition">
                                    Google
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
              
          
          </Document>

         
        </>
      
    );
}

Register.getInitialProps = async (ctx) => {
  return {}
}

export default Register;
