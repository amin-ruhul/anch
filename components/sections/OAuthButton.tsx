import AuthButton from "../ui/button/AuthButton";
import GoogleIcon from "@/icons/google.svg";
import AppleIcon from "@/icons/apple.svg";

function OAuthButton() {
  return (
    <div className="grid gap-5 md:grid-cols-2 mt-8">
      <AuthButton>
        <div className="flex items-center space-x-3">
          <GoogleIcon />
          <p className="text-gray-800 font-medium">Sign Up with Google</p>
        </div>
      </AuthButton>

      <AuthButton>
        <div className="flex items-center space-x-3">
          <AppleIcon />
          <p className="text-gray-800 font-medium">Sign Up with Google</p>
        </div>
      </AuthButton>
    </div>
  );
}

export default OAuthButton;
