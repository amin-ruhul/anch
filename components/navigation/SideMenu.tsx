import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import DashboardIcon from "@/icons/dashboard.svg";
import Logo from "@/icons/logo.svg";
import UserIcon from "@/icons/user.svg";
import { clearAuthToken } from "@/services/cookies";
import { reset } from "@/store/feature/authSlice";
import { useAppDispatch } from "@/store/hook";

function SideMenu() {
  const [activeTab, setActiveTab] = useState("/dashboard");
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setActiveTab(router.pathname);
  }, [router]);

  const Logout = () => {
    clearAuthToken();
    dispatch(reset());
    router.push("/");
  };

  return (
    <>
      <Link href="/">
        <div className="flex items-center space-x-2 mb-11">
          <Logo /> <p className="text-brand-color text-3xl font-bold">Stack</p>
        </div>
      </Link>

      <div>
        <Link href="/dashboard">
          <div
            className={`flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-500 cursor-pointer transition-all duration-100 delay-75 ${
              activeTab === "/dashboard" && "bg-gray-500"
            }`}
          >
            <DashboardIcon />
            <p className="text-sm text-[#A7AFBC]">Dashboard</p>
          </div>
        </Link>

        <Link href="/users">
          <div
            className={`flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-500 cursor-pointer transition-all duration-100 delay-75 ${
              activeTab === "/users" && "bg-gray-500"
            }`}
          >
            <UserIcon />
            <p className="text-sm text-[#A7AFBC]">Users</p>
          </div>
        </Link>

        <button
          onClick={Logout}
          className={`w-full border  mt-5 flex items-center space-x-4 p-4 rounded-2xl hover:bg-gray-500 cursor-pointer transition-all duration-100 delay-75`}
        >
          <p className="text-sm text-[#A7AFBC]">Logout</p>
        </button>
      </div>
    </>
  );
}

export default SideMenu;
