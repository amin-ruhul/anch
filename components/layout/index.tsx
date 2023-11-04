import { useAppSelector } from "@/store/hook";

import AuthLayout from "./AuthLayout";
import GenericLayout from "./GenericLayout";

function Layout({ children }: { children: React.ReactNode }) {
  const { authToken } = useAppSelector((state) => state.auth);

  if (authToken) return <AuthLayout>{children}</AuthLayout>;

  return <GenericLayout>{children}</GenericLayout>;
}

export default Layout;
