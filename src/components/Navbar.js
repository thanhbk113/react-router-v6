import { NavLink } from "react-router-dom";
import { UseAuth } from "../auth";

const Navbar = () => {
   const auth= UseAuth()

   const navLinkStyles = ( {isActive} ) => {
       return {
           fontWeight:isActive ? 'bold' : 'normal',
           textDecoration: isActive ? 'none': 'underline'
       }
   }

    return (
        <nav className="primary-nav">
           <NavLink style={navLinkStyles} to='/'>Home</NavLink>
           <NavLink style={navLinkStyles} to='/about'>About</NavLink>
           <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
           <NavLink style={navLinkStyles} to='/profile'>Profile</NavLink>
           {
             !auth.user &&
           <NavLink style={navLinkStyles} to='/login'>Login</NavLink>
           }
        </nav>
    );
};

export default Navbar;