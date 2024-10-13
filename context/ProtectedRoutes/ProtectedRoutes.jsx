import { Navigate, useLocation } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../authContext/authContext";

 const ProtectedRoutes = ({children})=>{
const {currentUser}= useContext(AuthContext)
const location = useLocation();
   if (!currentUser){
   return <Navigate to="/login" state={{path: location.pathname}}/>

    }
    return children;
};
export default ProtectedRoutes