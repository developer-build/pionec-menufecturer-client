import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import auth from "../shared/firebase.init";
import Spinner from "../shared/Spinner";

const RequireAuth = ({children}) => {
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
