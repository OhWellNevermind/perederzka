import PropTypes from "prop-types";

const BurgerMenu = ({ isOpen }) => {
  return (
    <div
      className={`z-50 fixed transition-all pb-[100px] ease-in-out duration-300 w-full h-full bg-white top-[56px] translate-x-full left-0 ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } `}
    >
      <div className="flex flex-col items-center h-full">
        <div className="flex flex-col pt-[20px] px-[30px] gap-[30px]">
          <a
            className="font-semibold text-[16px] text-black text-center"
            href=""
          >
            Залишити тварину на перетримку
          </a>
          <a
            className="font-semibold text-[16px] text-black text-center"
            href=""
          >
            Стати догсітером
          </a>
          <a
            className="font-semibold text-[16px] text-black text-center"
            href=""
          >
            FAQs
          </a>
        </div>
        <div className="mt-auto flex gap-[30px]">
          <button className="font-semibold text-lg text-main">Увійти</button>
          <button className="p-[10px] bg-main rounded-[5px] font-semibold text-lg text-white hover:bg-hover focus:bg-white focus:text-hover">
            Зареєструватися
          </button>
        </div>
      </div>
    </div>
  );
};

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool,
};

export default BurgerMenu;
