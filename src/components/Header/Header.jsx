import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#FBFBFB]  border-b-2 border-b-[#D9D9D9] px-[10px]">
      <div className="flex justify-between">
        <Link to="/" className="font-black text-2xl text-main">
          LOGO
        </Link>
        <button type="button">
          <HiOutlineMenu size={24} fill="#17BBDE" stroke="#17BBDE" />
        </button>
      </div>
    </header>
  );
};

export default Header;
