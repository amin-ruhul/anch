import AuthLayout from "./AuthLayout";
import GenericLayout from "./GenericLayout";

function Layout({ children }: { children: React.ReactNode }) {
  return <GenericLayout>{children}</GenericLayout>;
}

export default Layout;
