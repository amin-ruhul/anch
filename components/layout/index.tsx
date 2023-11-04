import { useEffect, useState } from "react";

import { useAppSelector } from "@/store/hook";

import AuthLayout from "./AuthLayout";
import GenericLayout from "./GenericLayout";

function Layout({ children }: { children: React.ReactNode }) {
  const { authToken } = useAppSelector((state) => state.auth);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (authToken) {
      setIsAuthenticated(true);
    }
  }, [authToken]);

  if (isAuthenticated) return <AuthLayout>{children}</AuthLayout>;

  return <GenericLayout>{children}</GenericLayout>;
}

export default Layout;
