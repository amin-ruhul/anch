import CloseIcon from "@/icons/cross.svg";
import Logo from "@/icons/logo.svg";
import Link from "next/link";
import DashboardIcon from "@/icons/dashboard.svg";
import UserIcon from "@/icons/user.svg";

type PropType = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

function MobileMenu({ onClick }: PropType) {
  return (
    <div className="fixed inset-0 z-50 w-full bg-white shadow md:hidden">
      <div className="pt-6 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 mb-11">
          <Logo /> <p className="text-[#4E5D78] text-3xl font-bold">Stack</p>
        </div>

        <button onClick={onClick}>
          <CloseIcon />
        </button>
      </div>

      <div className="w-full h-1 bg-slate-400"></div>

      <div onClick={onClick} className="mt-4">
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
    </div>
  );
}

export default MobileMenu;
