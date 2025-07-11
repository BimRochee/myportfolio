import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="w-full fixed top-0 left-0 z-20 px-0">
      <div className="flex justify-between items-center bg-black h-16 w-full border-b border-orange px-6">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>

      <div className="lg:hidden sm:block h-14 bg-black flex items-center justify-center border-t border-orange">
        <NavbarToggler />
      </div>
    </nav>
  );
};



export default NavbarMain;
