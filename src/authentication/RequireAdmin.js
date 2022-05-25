import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import auth from "../shared/firebase.init";
import Spinner from "../shared/Spinner";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminloading] = useAdmin(user);
  if (loading || adminloading) {
    return <Spinner />;
  }

    if (!user || !admin) {
      
    return <Navigate to="*"  />;
  }

  return children;
};

export default RequireAdmin;
