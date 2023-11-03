//import { UseFormRegister, FieldValues } from "react-hook-form";
import clsx from "clsx";

type AppTextInputType = {
  name: string;
  register: any;
  error: Error;
  placeholder: string;
  logo: React.ReactNode;
  inputType?: string;
  className?: string;
};

function AppTextInput({
  name,
  register,
  error,
  placeholder,
  logo,
  inputType,
  className,
}: AppTextInputType) {
  return (
    <>
      <div
        className={clsx(
          className,
          { "border-error-color": error.message },
          { "border-gray-600": !error.message },
          "w-full border  rounded-2xl flex space-x-2 items-center px-4"
        )}
      >
        {logo}
        <input
          type={inputType}
          {...register(name)}
          placeholder={placeholder}
          className="flex-1 py-4 focus:outline-none focus:ring-0  outline-0 placeholder:text-gray-700 bg-white rounded-2xl"
        />
      </div>

      {error?.message && (
        <p className="text-error-color text-sm mt-[0.35rem] first-letter:uppercase">
          {error?.message}
        </p>
      )}
    </>
  );
}

export default AppTextInput;
