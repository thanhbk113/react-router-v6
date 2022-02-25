import { Navigate , useLocation} from "react-router-dom";
import { UseAuth } from "../auth";

const RequireAuth = ( {children} ) => {
   const auth = UseAuth()
   const location = useLocation()

   if(!auth.user) {
       return (
           <Navigate to='/login' state={{state: location.pathname}} />
       )
   }

    return children
};

export default RequireAuth;