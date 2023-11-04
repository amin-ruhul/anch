import { useEffect, useState } from "react";

import clsx from "clsx";

function PasswordProgressBar({ password }: { password: string }) {
  const NUM_OF_BAR = [1, 2, 3, 4, 5, 6];
  const [passwordStrength, setPasswordStrength] = useState(0);
  const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  const calculatePasswordLength = (password: string) => {
    if (!password) return;
    let count = 1;

    if (password.length >= 8) {
      count += 2;
    }
    if (password.length >= 8 && specialChar.test(password)) {
      count += 2;
    }
    if (password.length >= 8 && /\d/.test(password)) {
      count++;
    }

    setPasswordStrength(count);
  };

  useEffect(() => {
    calculatePasswordLength(password);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [password]);

  return (
    <div className=" grid grid-cols-6 gap-5">
      {NUM_OF_BAR.map((val) => (
        <div
          key={val}
          className={clsx(
            { "bg-[#38CB89]": passwordStrength >= val },
            { "bg-gray-600": passwordStrength < val },
            "w-full h-2 rounded-2xl transition-all duration-150 delay-100"
          )}
        ></div>
      ))}
    </div>
  );
}

export default PasswordProgressBar;
