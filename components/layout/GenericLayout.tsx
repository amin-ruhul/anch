import Logo from "@/icons/logo.svg";
import ChevronDownIcon from "@/icons/down.svg";
import DropDown from "../navigation/DropDown";
import { useState } from "react";
import Link from "next/link";

function GenericLayout({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("English");
  const [languageToggle, setLanguageToggle] = useState(false);

  const handleLanguageChange = async (data: string) => {
    setLanguage(data);
    setLanguageToggle(false);
  };

  return (
    <>
      <nav className="px-12 py-7 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Logo />{" "}
            <p className="text-brand-color text-3xl font-bold">Stack</p>
          </div>
        </Link>

        <div className="relative">
          <button
            className="bg-gray-500 rounded-2xl flex items-center space-x-5 py-3 px-5 "
            onClick={() => setLanguageToggle(!languageToggle)}
          >
            <p className="text-gray-700 text-sm">{language}</p>
            <ChevronDownIcon />
          </button>

          <div className="absolute -left-0 top-[1rem] md:-left-[1rem] lg:-left-[5rem]">
            <DropDown
              dropDownData={[
                { id: 1, value: "English" },
                { id: 2, value: "Bangla" },
              ]}
              isModalOpen={languageToggle}
              handleItemChange={(data) => handleLanguageChange(data)}
            />
          </div>
        </div>
      </nav>

      <section>{children}</section>
    </>
  );
}

export default GenericLayout;
