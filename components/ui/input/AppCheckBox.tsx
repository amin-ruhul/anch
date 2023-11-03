//import { UseFormRegister, FieldValues } from "react-hook-form";

type AppCheckBoxType = {
  name: string;
  register: any;
  error: Error;
  label: string;
  className?: string;
};

function AppCheckBox({
  name,
  register,
  error,
  label,
  className,
}: AppCheckBoxType) {
  return (
    <>
      <div className="flex items-center space-x-3">
        <input
          id={name}
          className={`${className} h-[1.75rem] min-w-[1.75rem] rounded-lg  bg-gray-400 appearance-none cursor-pointer  checked:before:text-primary text-xl checked:before:content-['\\2713']`}
          type="checkbox"
          {...register(name)}
        />

        <label htmlFor={name} className="text-gray-700 cursor-pointer">
          {label}
        </label>
      </div>

      {error?.message && (
        <p className="text-error-color text-sm mt-[0.35rem] first-letter:uppercase">
          {error?.message}
        </p>
      )}
    </>
  );
}

export default AppCheckBox;
