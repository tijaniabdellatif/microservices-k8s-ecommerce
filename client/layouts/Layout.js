import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

  const Layout = ({ children }) => {
      return (
        <>
          <Head>
            <title>Nextjs-Dev Blog</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          </Head>

          <div className="w-32 h-32 bg-red-800 m-12 text-white">
            TIJANI
          </div>
        </>
      );
    };

    export default Layout;