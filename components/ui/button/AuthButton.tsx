type AuthButtonProps = {
  children: React.ReactNode;
  className?: string;
};

function AuthButton({ children, className }: AuthButtonProps) {
  return (
    <button
      className={`${className} bg-gray-500 rounded-2xl px-[2.188rem] py-[1rem] w-full`}
    >
      {children}
    </button>
  );
}

export default AuthButton;
