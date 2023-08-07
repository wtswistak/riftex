import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="flex items-center z-[10]">
      <img
        src="../src/assets/logo.png"
        alt="logo-controller"
        className="w-[28px] h-[19px] mr-1.5"
      />
      <p className="text-gray-100 mr-2 text-[28px] font-semibold">RIFTEX</p>
    </Link>
  );
}

export default Logo;
