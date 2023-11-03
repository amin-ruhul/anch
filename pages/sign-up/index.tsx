import AuthButton from "@/components/ui/button/AuthButton";
import AppleIcon from "@/icons/apple.svg";
import GoogleIcon from "@/icons/google.svg";
import EmailIcon from "@/icons/email.svg";
import AppTextInput from "@/components/ui/input/AppTextInput";
import AppPasswordInput from "@/components/ui/input/AppPasswordInput";
import NameIcon from "@/icons/name.svg";
import PrimaryButton from "@/components/ui/button/PrimaryButon";
import AppCheckBox from "@/components/ui/input/AppCheckBox";
import Link from "next/link";

function SignUp() {
  return (
    <div className="w-full flex items-center justify-center mt-[7.5rem]">
      <section className="w-full max-w-[580px]">
        <div className="flex flex-col items-center space-y-5">
          <h1 className="font-bold text-[1.625rem] text-[#323B4B]">
            Getting Started
          </h1>
          <p className="text-lg font-medium text-gray-800">
            Create an account to continue!
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 mt-8">
          <AuthButton>
            <div className="flex items-center space-x-3">
              <GoogleIcon />
              <p className="text-gray-800 font-medium">Sign Up with Google</p>
            </div>
          </AuthButton>

          <AuthButton>
            <div className="flex items-center space-x-3">
              <AppleIcon />
              <p className="text-gray-800 font-medium">Sign Up with Google</p>
            </div>
          </AuthButton>
        </div>

        <div className="flex items-center space-x-2 mt-11 mb-9">
          <div className="h-[2px] bg-gray-600 flex-1"></div>
          <div>OR</div>
          <div className="h-[2px] bg-gray-600 flex-1"></div>
        </div>

        <div className="space-y-8">
          <AppTextInput
            placeholder="Your Email"
            logo={<EmailIcon />}
            register={() => {}}
            error={{ name: "", message: "" }}
            name="email"
          />

          <AppTextInput
            placeholder="Your Name"
            logo={<NameIcon />}
            register={() => {}}
            error={{ name: "", message: "" }}
            name="email"
          />

          <AppPasswordInput
            placeholder="Password"
            register={() => {}}
            error={{ name: "", message: "" }}
            name="email"
          />

          <AppCheckBox
            name="condition"
            register={() => {}}
            error={{ name: "", message: "" }}
            label="I agree to the Terms & Conditions"
          />

          <PrimaryButton
            isLoading={false}
            disabled={false}
            onClick={() => console.log("clicked")}
          >
            Sign Up
          </PrimaryButton>
        </div>

        <p className="text-center text-gray-700 mt-9">
          Already have an account?
          <span className="text-primary ml-1">
            <Link href="/sign-in">Sign In</Link>{" "}
          </span>
        </p>
      </section>
    </div>
  );
}

export default SignUp;
