import Link from "next/link";

import { motion } from "framer-motion";

import CloseIcon from "@/icons/cross.svg";
import DashboardIcon from "@/icons/dashboard.svg";
import Logo from "@/icons/logo.svg";
import UserIcon from "@/icons/user.svg";

type PropType = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

function MobileMenu({ onClick }: PropType) {
  return (
    <motion.div
      className="fixed inset-0 z-50 w-full bg-white shadow md:hidden"
      variants={{
        open: {
          x: 0,
        },
        close: {
          x: "-100%",
        },
      }}
      initial="close"
      animate="open"
      exit="close"
      transition={{ duration: 0.2, delay: 0.1, bounce: 0.1 }}
    >
      <div className="pt-6 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 mb-11">
          <Logo /> <p className="text-brand-color text-3xl font-bold">Stack</p>
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
    </motion.div>
  );
}

export default MobileMenu;
