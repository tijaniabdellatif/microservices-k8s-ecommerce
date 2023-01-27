import "../styles/_global.css";
import { ThemeProvider } from "next-themes";
/**
 * Component for exporting automatically
 * from pages folder
 */
export default ({Component,pageProps}) =>{
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
        
    );
};

