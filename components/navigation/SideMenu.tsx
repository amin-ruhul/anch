import Link from "next/link";

import DashboardIcon from "@/icons/dashboard.svg";
import Logo from "@/icons/logo.svg";
import UserIcon from "@/icons/user.svg";

function SideMenu() {
  return (
    <>
      <Link href="/">
        <div className="flex items-center space-x-2 mb-11">
          <Logo /> <p className="text-brand-color text-3xl font-bold">Stack</p>
        </div>
      </Link>

      <div>
        <Link href="/dashboard">
          <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-500 cursor-pointer transition-all duration-100 delay-75">
            <DashboardIcon />
            <p className="text-sm text-[#A7AFBC]">Dashboard</p>
          </div>
        </Link>

        <Link href="/users">
          <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-500 cursor-pointer transition-all duration-100 delay-75">
            <UserIcon />
            <p className="text-sm text-[#A7AFBC]">Users</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SideMenu;
