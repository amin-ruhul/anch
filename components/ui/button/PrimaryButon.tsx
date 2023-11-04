import clsx from "clsx";
import InlineLoader from "@/icons/inline-loader.svg";

type PrimaryButtonProps = {
  children: React.ReactNode;
  className?: string;
  isLoading: boolean;
  disabled: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function PrimaryButton({
  children,
  className,
  isLoading,
  disabled,
  onClick,
}: PrimaryButtonProps) {
  return (
    <button
      className={clsx(
        className,
        `bg-primary w-full min-w-[5rem] h-[3.625rem] rounded-2xl text-white relative`
      )}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {isLoading && (
        <InlineLoader className="inline-block h-[3rem] w-[3rem] absolute top-[calc(50%_-_1.5rem)] left-[calc(50%_-_1.5rem)]" />
      )}
      <div
        className={clsx(
          {
            invisible: isLoading,
            visible: !isLoading,
          },
          "inline-block"
        )}
      >
        {children}
      </div>
    </button>
  );
}

export default PrimaryButton;
