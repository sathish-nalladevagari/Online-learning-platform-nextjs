import NavbarRoutes from "@/components/NavbarRoutes";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
    return ( 
        <div className="p-4 border-b shadow-sm flex items-center bg-white">
            <MobileSidebar />
            <NavbarRoutes />
        </div>
     );
}
 
export default Navbar;