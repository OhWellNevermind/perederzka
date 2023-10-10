import { DogIcon } from "../../icons/DogIcon";
import { CatIcon } from "../../icons/CatIcon";

export const SearchForm = () => {
  return (
    <form
      className="flex flex-col items-center pt-[20px] pb-[30px] rounded-[5px] 
                 border-4 border-[#EBEBEB] bg-[#F9F9F9] w-full max-w-[300px] md:max-w-[704px] lg:max-w-[1280px] md:justify-center"
      id="leftPet"
    >
      <h2 className="px-[10px] text-[18px] lg:text-[32px] mb-[20px] font-semibold text-center w-[277px] md:w-[391px] lg:w-[730px]">
        Тут ви зможете знайти в кого залишити домашню тварину у вашому місті
      </h2>
      <div className="w-full h-[2px] bg-[#D9D9D9]"></div>
      <div
        className="px-[10px] lg:px-0 w-full md:max-w-[704px] 
                      lg:max-w-none flex flex-col lg:flex-row lg:gap-[100px]
                      md:items-center lg:justify-center pt-[20px] lg:pt-[40px]
                      lg:mb-10"
      >
        <div className="flex flex-col md:w-fit mb-[20px] lg:mb-0">
          <h3 className="font-semibold text-[14px] lg:text-[18px] mb-[10px] lg:mb-[16px] md:w-fit">
            Де будемо шукати?
          </h3>
          <select
            className="w-full md:w-[280px] rounded-[5px] border-2 border-[#D9D9D9] bg-white "
            defaultValue=""
          >
            <option disabled value="">
              Оберіть місто...
            </option>
          </select>
        </div>
        <div className="flex flex-col md:w-fit">
          <h3 className="font-semibold text-[14px] lg:text-[18px] mb-[10px] lg:mb-[16px] md:w-fit">
            Я хочу залишити:
          </h3>
          <div className="flex justify-between md:justify-center md:gap-5 lg:gap-10 mb-[40px] lg:mb-0">
            <label className="relative flex lg:flex-row-reverse lg:gap-[10px] items-center justify-center">
              <span className="absolute lg:static flex flex-col lg:flex-row-reverse lg:gap-[5px] justify-center items-center">
                <DogIcon className="lg:w-[32px] lg:h-[32px]" />
                Собаку
              </span>

              <input type="checkbox" name="dog" value="dog" />
            </label>
            <label className=" relative flex lg:flex-row-reverse gap-[10px] items-center justify-center">
              <span className="absolute lg:static flex flex-col lg:flex-row-reverse lg:gap-[5px] justify-center items-center">
                <CatIcon />
                Кота
              </span>
              <input type="checkbox" name="cat" value="cat" />
            </label>
            <label className="relative flex lg:flex-row-reverse lg:gap-[10px] items-center justify-center">
              <span className="absolute lg:static flex flex-col justify-center items-center">
                Інше
              </span>
              <input type="checkbox" name="other" value="other" />
            </label>
          </div>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        type="submit"
        className="w-fit bg-main rounded-[5px] p-[10px] text-white text-lg font-semibold hover:bg-hover focus:bg-white focus:text-hover"
      >
        <span className="lg:hidden">Знайти варіанти</span>
        <span className="hidden lg:block">
          Натисніть, щоб знайти в кого залишити тварину
        </span>
      </button>
    </form>
  );
};
