import { useContext, useEffect } from "react";

import {
  AuthContext,
  type AuthContextData,
} from "@Context/Auth";

const useAuth = () => {
  const context = useContext(AuthContext) as AuthContextData;

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export default useAuth;