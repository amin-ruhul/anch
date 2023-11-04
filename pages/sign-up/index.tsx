import EmailIcon from "@/icons/email.svg";
import AppTextInput from "@/components/ui/input/AppTextInput";
import AppPasswordInput from "@/components/ui/input/AppPasswordInput";
import NameIcon from "@/icons/name.svg";
import PrimaryButton from "@/components/ui/button/PrimaryButon";
import AppCheckBox from "@/components/ui/input/AppCheckBox";
import Link from "next/link";
import OAuthButton from "@/components/sections/OAuthButton";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "@/utils/schema/auth";
import { SignUpInputTypes } from "@/utils/types/auth";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputTypes>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver<SignUpInputTypes>(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpInputTypes> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full flex items-center justify-center mt-[4.5rem]">
      <section className="w-full max-w-[580px]">
        <div className="flex flex-col items-center space-y-5">
          <h1 className="font-bold text-[1.625rem] text-[#323B4B]">
            Getting Started
          </h1>
          <p className="text-lg font-medium text-gray-800">
            Create an account to continue!
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
            placeholder="Your Email"
            logo={<EmailIcon />}
            name="email"
            register={register}
            error={errors.email}
          />

          <AppTextInput
            placeholder="Your Name"
            logo={<NameIcon />}
            name="name"
            register={register}
            error={errors.name}
          />

          <AppPasswordInput
            placeholder="Password"
            name="password"
            register={register}
            error={errors.password}
          />

          <AppCheckBox
            name="terms"
            register={register}
            error={errors.terms}
            label="I agree to the Terms & Conditions"
          />

          <PrimaryButton isLoading={false} disabled={false}>
            Sign Up
          </PrimaryButton>
        </form>

        <p className="text-center text-gray-700 mt-9">
          Already have an account?
          <span className="text-primary ml-1">
            <Link href="/">Sign In</Link>
          </span>
        </p>
      </section>
    </div>
  );
}

export default SignUp;
