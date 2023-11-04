import { FieldError } from "react-hook-form";

type AppCheckBoxType = {
  name: string;
  register: any;
  error: FieldError | undefined;
  label: string;
};

function AppCheckBox({ name, register, error, label }: AppCheckBoxType) {
  return (
    <section>
      <div>
        <div className="inline-flex items-center">
          <label
            className="relative flex items-center p-3 rounded-full cursor-pointer"
            htmlFor={name}
            data-ripple-dark="true"
          >
            <input
              type="checkbox"
              className="before:content[''] peer relative h-[1.75rem] w-[1.75rem] cursor-pointer appearance-none rounded-md border transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-400  checked:bg-gray-400  checked:before:bg-gray-400 hover:before:opacity-10 bg-gray-400 "
              id={name}
              {...register(name)}
            />
            <div className="absolute text-primary transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </label>
          <label htmlFor={name} className="text-gray-700 cursor-pointer">
            {label}
          </label>
        </div>
        {error?.message && (
          <p className="text-error-color text-sm mt-[0.35rem] first-letter:uppercase">
            {error?.message}
          </p>
        )}
      </div>
    </section>
  );
}

export default AppCheckBox;
