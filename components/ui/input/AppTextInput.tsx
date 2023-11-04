import { FieldError } from "react-hook-form";
import clsx from "clsx";

type AppTextInputType = {
  name: "password" | "email" | "remember" | "name";
  register: any;
  error: FieldError | undefined;
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
    <section>
      <div
        className={clsx(
          className,
          { "border-error-color": error?.message },
          { "border-gray-600": !error?.message },
          "w-full border  rounded-2xl flex space-x-2 items-center px-4 transition-all duration-150 delay-75"
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
        <p className="text-error-color text-sm mt-3 first-letter:uppercase">
          {error?.message}
        </p>
      )}
    </section>
  );
}

export default AppTextInput;
