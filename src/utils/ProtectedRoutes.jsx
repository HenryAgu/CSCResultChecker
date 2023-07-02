import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoutes = () => {
  const { auth } = useAuth();
  const location = useLocation();
  console.log(auth);
  return auth?.accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/admin/register/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;