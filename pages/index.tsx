import { Inter } from "next/font/google";
import Logo from "@/icons/logo.svg";
import Google from "@/icons/google.svg";
import Apple from "@/icons/apple.svg";
import AuthButton from "@/components/ui/button/AuthButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} px-[81px] py-[28px] border`}>
      <nav className="flex items-center justify-between border w-full">
        <div className="flex items-center space-x-1">
          <Logo />
          <p className="text-[#4E5D78] text-[18px] font-bold">Stack</p>
        </div>
        <div className=" bg-gray-500 rounded-xl h-[43px] w-[146px] flex items-center justify-center">
          <p>English</p>
        </div>
      </nav>

      <section>
        <h1 className="font-bold text-[1.625rem] text-[#323B4B]">
          Getting Started
        </h1>
        <p className="text-lg font-medium text-gray-800">
          Create an account to continue!
        </p>

        <div>
          <AuthButton>
            <div className="flex items-center space-x-3">
              <Google />
              <p className="text-gray-800 font-medium">Sign Up with Google</p>
            </div>
          </AuthButton>

          <AuthButton>
            <div className="flex items-center space-x-3">
              <Apple />
              <p className="text-gray-800 font-medium">Sign Up with Google</p>
            </div>
          </AuthButton>
        </div>
      </section>
    </main>
  );
}
