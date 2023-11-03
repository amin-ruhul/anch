import SideMenu from "../navigation/SideMenu";
import TopHeader from "../navigation/TopHeader";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" grid grid-cols-6 min-h-screen">
      <section className="hidden md:block border-r px-4 py-10">
        <SideMenu />
      </section>
      <section className="col-span-6 md:col-span-5 px-9 py-6">
        <TopHeader />
        <section>{children}</section>
      </section>
    </div>
  );
}

export default AuthLayout;
