import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-[#FBFBFB]  border-b-2 border-b-[#D9D9D9] p-[10px]">
        <div className="flex justify-between">
          <Link to="/" className="font-black text-2xl text-main">
            LOGO
          </Link>
          {isOpen ? (
            <button
              onClick={() => {
                setIsOpen(false);
                window.document.documentElement.style.overflow = "auto";
              }}
            >
              <IoCloseSharp size={24} fill="#17BBDE" stroke="#17BBDE" />
            </button>
          ) : (
            <button
              onClick={() => {
                setIsOpen(true);
                window.document.documentElement.style.overflowY = "hidden";
              }}
              type="button"
            >
              <HiOutlineMenu size={24} fill="#17BBDE" stroke="#17BBDE" />
            </button>
          )}
        </div>
      </header>
      <BurgerMenu isOpen={isOpen} />
    </>
  );
};

export default Header;
