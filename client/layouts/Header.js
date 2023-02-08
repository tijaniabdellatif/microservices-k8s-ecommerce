import Logo from "../components/Logo";
import CustomThemeChange from "../components/CustomDark";
const Header = ({currentUser}) => {
   
   
      return (
       
         <CustomThemeChange currentUser={currentUser}>
          <Logo />
         </CustomThemeChange>
      );
    };

    export default Header;