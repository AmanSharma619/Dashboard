import { Navigate } from "react-router-dom";
import { UseFirebase } from "../firebase";

const ProtectedRoute = ({ children }) => {
  const firebase = UseFirebase();
  const user = firebase.user;
  console.log(user);
  
  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;