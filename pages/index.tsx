import OAuthButton from "@/components/sections/OAuthButton";
import { Inter } from "next/font/google";
import AppTextInput from "@/components/ui/input/AppTextInput";
import AppPasswordInput from "@/components/ui/input/AppPasswordInput";
import PrimaryButton from "@/components/ui/button/PrimaryButon";
import AppCheckBox from "@/components/ui/input/AppCheckBox";
import Link from "next/link";
import EmailIcon from "@/icons/email.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "@/utils/schema/auth";
import { SignInInputTypes } from "@/utils/types/auth";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputTypes>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver<SignInInputTypes>(signInSchema),
  });

  const onSubmit: SubmitHandler<SignInInputTypes> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full flex items-center justify-center mt-[5.5rem]">
      <section className="w-full max-w-[580px]">
        <div className="flex flex-col items-center space-y-5">
          <h1 className="font-bold text-[1.625rem] text-[#323B4B]">Sign In</h1>
          <p className="text-lg font-medium text-gray-800">
            Welcome back, you’ve been missed!
          </p>
        </div>
        <OAuthButton />

        <div className="flex items-center space-x-2 mt-11 mb-9">
          <div className="h-[2px] bg-gray-600 flex-1"></div>
          <div>OR</div>
          <div className="h-[2px] bg-gray-600 flex-1"></div>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <AppTextInput
            name="email"
            placeholder="Your Email"
            logo={<EmailIcon />}
            register={register}
            error={errors.email}
          />

          <AppPasswordInput
            placeholder="Password"
            name="password"
            register={register}
            error={errors.password}
          />

          <AppCheckBox
            name="remember"
            register={register}
            error={errors.remember}
            label="Remember Me"
          />

          <PrimaryButton
            isLoading={false}
            disabled={false}
            onClick={() => console.log("clicked")}
          >
            Sign In
          </PrimaryButton>
        </form>

        <p className="text-center text-gray-700 mt-9">
          Don’t have an account yet?
          <span className="text-primary ml-1">
            <Link href="/sign-up">Sign Up</Link>
          </span>
        </p>
      </section>
    </div>
  );
}
