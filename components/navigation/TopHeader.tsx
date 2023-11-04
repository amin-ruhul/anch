import { useState } from "react";

import Image from "next/image";

import { AnimatePresence } from "framer-motion";

import HamburgerIcon from "@/icons/hamburger.svg";
import NotificationIcon from "@/icons/notification.svg";
import SearchIcon from "@/icons/search.svg";

import MobileMenu from "./MobileMenu";

function TopHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
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
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <HamburgerIcon />
          </button>
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClick={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default TopHeader;
