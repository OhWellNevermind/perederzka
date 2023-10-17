import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex justify-center bg-[#FBFBFB] border-b-2 border-b-[#D9D9D9] p-[10px] lg:mr-auto lg:ml-auto">
        <div className="flex justify-between items-center w-full lg:justify-normal lg:max-w-[1280px]">
          <Link
            to="/"
            className="font-black text-2xl lg:text-[32px] text-main mr-[134px]"
          >
            LOGO
          </Link>
          <div className="hidden lg:flex items-center w-full justify-between">
            <div className="flex gap-[30px] mr-[134px]">
              <a
                className="font-semibold text-[18px] text-black text-center hover:text-main transition-all ease-linear"
                href=""
              >
                Залишити тварину на перетримку
              </a>
              <a
                className="font-semibold text-[18px] text-black text-center hover:text-main transition-all ease-linear"
                href=""
              >
                Стати догсітером
              </a>
              <a
                className="font-semibold text-[18px] text-black text-center hover:text-main transition-all ease-linear"
                href=""
              >
                FAQs
              </a>
            </div>
            <div className="mt-auto flex gap-[30px] items-center">
              <Link to="auth/login" className="font-semibold text-lg text-main">
                Увійти
              </Link>
              <Link
                to="auth/register/type"
                className="p-[10px] bg-main rounded-lg font-semibold text-lg text-white hover:bg-hover focus:bg-white focus:text-hover"
              >
                Зареєструватися
              </Link>
            </div>
          </div>
          <div className="lg:hidden">
            {isOpen ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                  window.document.documentElement.style.overflowY = "auto";
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
        </div>
      </header>
      <BurgerMenu isOpen={isOpen} />
    </>
  );
};

export default Header;
