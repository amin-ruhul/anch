import { FieldError } from "react-hook-form";
import clsx from "clsx";
import LockIcon from "@/icons/password.svg";
import OpenEye from "@/icons/open-eye.svg";
import CloseEye from "@/icons/close-eye.svg";
import { useState } from "react";

type AppPasswordInputType = {
  name: string;
  register: any;
  error: FieldError | undefined;
  placeholder: string;
  className?: string;
};

function AppPasswordInput({
  name,
  register,
  error,
  placeholder,
  className,
}: AppPasswordInputType) {
  const [eyeStatus, setEyeStatus] = useState(false);

  return (
    <section>
      <div
        className={clsx(
          className,
          { "border-error-color": error?.message },
          { "border-gray-600": !error?.message },
          "w-full border  rounded-2xl flex space-x-2 items-center px-4"
        )}
      >
        <LockIcon />
        <input
          type={eyeStatus ? "text" : "password"}
          {...register(name)}
          placeholder={placeholder}
          className="flex-1 py-4 focus:outline-none focus:ring-0  outline-0 placeholder:text-gray-700 bg-white rounded-2xl"
        />

        <div
          className="cursor-pointer"
          onClick={() => setEyeStatus(!eyeStatus)}
        >
          {eyeStatus ? <OpenEye /> : <CloseEye />}
        </div>
      </div>

      {error?.message && (
        <p className="text-error-color text-sm mt-3 first-letter:uppercase">
          {error?.message}
        </p>
      )}
    </section>
  );
}

export default AppPasswordInput;
