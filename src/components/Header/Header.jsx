import { HiOutlineMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeBurger = () => {
    setIsOpen(false);
    window.document.documentElement.style.overflowY = "auto";
  };

  return (
    <>
      <header className="flex justify-center bg-[#FBFBFB] border-b-2 border-b-[#D9D9D9] p-[10px] lg:mr-auto lg:ml-auto">
        <div
          className="flex justify-between items-center w-full lg:max-w-[1280px]
                     flex-none shrink-0 flex-grow-0"
        >
          <Link to="/" className="font-black text-2xl lg:text-[32px] text-main">
            LOGO
          </Link>
          <div className="hidden lg:flex">
            <div className="gap-[30px] flex">
              <a
                className="font-semibold text-[18px] text-black text-center hover:text-main transition-all ease-linear"
                href="#leftPet"
              >
                Залишити тварину на перетримку
              </a>
              <Link
                to="/auth/register/type/dogSitter"
                className="font-semibold text-[18px] text-black text-center hover:text-main transition-all ease-linear"
                href=""
              >
                Стати догсітером
              </Link>
              <a
                className="font-semibold text-[18px] text-black text-center hover:text-main transition-all ease-linear"
                href=""
              >
                FAQs
              </a>
            </div>
          </div>
          <div className="mt-auto gap-[30px] items-center hidden lg:flex">
            <Link
              to="auth/login"
              className="font-semibold text-lg text-main hover:text-hover active:bg-main active:text-white p-[10px] rounded-lg"
            >
              <button>Увійти</button>
            </Link>
            <Link
              to="auth/register/type"
              className="p-[10px] bg-main rounded-lg font-semibold text-lg text-white hover:bg-hover active:bg-white active:text-hover active:border-main active:border-[2px] active:p-[8px]"
            >
              Зареєструватися
            </Link>
          </div>
          <div className="lg:hidden">
            {isOpen ? (
              <button
                onClick={() => {
                  closeBurger();
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
      <BurgerMenu isOpen={isOpen} closeBurger={closeBurger} />
    </>
  );
};

export default Header;
