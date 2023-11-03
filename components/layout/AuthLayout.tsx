import Logo from "@/icons/logo.svg";
import DashboardIcon from "@/icons/dashboard.svg";
import UserIcon from "@/icons/user.svg";
import NotificationIcon from "@/icons/notification.svg";
import Image from "next/image";
import SearchIcon from "@/icons/search.svg";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" grid grid-cols-6 min-h-screen">
      <section className="hidden md:block border-r px-4 py-10">
        <div className="flex items-center space-x-2 mb-11">
          <Logo /> <p className="text-[#4E5D78] text-3xl font-bold">Stack</p>
        </div>

        <div>
          <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-500 cursor-pointer transition-all duration-100 delay-75">
            <DashboardIcon />
            <p className="text-sm text-[#A7AFBC]">Dashboard</p>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-500 cursor-pointer transition-all duration-100 delay-75">
            <UserIcon />
            <p className="text-sm text-[#A7AFBC]">Users</p>
          </div>
        </div>
      </section>
      <section className="col-span-6 md:col-span-5 px-9 py-6">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <form className="h-[3.375rem] bg-gray-500 rounded-[0.875rem] flex justify-between items-center px-2 md:px-6 w-full md:max-w-[50%] order-2 md:order-1">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 h-full bg-gray-500 placeholder:text-gray-700 focus:outline-none focus:ring-0  outline-0"
            />
            <SearchIcon />
          </form>

          <div className="order-1 md:order-2 flex items-center justify-between mb-4 md:mb-0">
            <button className=" md:hidden ">Open Nav</button>
            <div className="flex items-center space-x-11">
              <NotificationIcon />
              <Image
                src="/assets/images/user.png"
                width={47}
                height={47}
                alt="user image"
                className="rounded-full"
              />
            </div>
          </div>
        </header>

        <section>{children}</section>
      </section>
    </div>
  );
}

export default AuthLayout;
