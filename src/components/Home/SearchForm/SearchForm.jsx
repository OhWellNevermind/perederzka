import { DogIcon } from "../../icons/DogIcon";
import { CatIcon } from "../../icons/CatIcon";

export const SearchForm = () => {
  return (
    <form
      className="flex flex-col items-center pt-[20px] pb-[30px] rounded-[5px] 
                                border-4 border-[#EBEBEB] bg-[#F9F9F9] w-full max-w-[300px]"
      id="leftPet"
    >
      <h2 className=" px-[10px] text-[18px] mb-[20px] font-semibold text-center w-[277px]">
        Тут ви зможете знайти в кого залишити домашню тварину у вашому місті
      </h2>
      <div className="w-full h-[2px] bg-[#D9D9D9]"></div>
      <div className="self-start px-[10px] w-full">
        <h3 className="self-start font-semibold text-[14px] mb-[10px] pt-[20px]">
          Де будемо шукати?
        </h3>
        <select
          className="w-full rounded-[5px] border-2 border-[#D9D9D9] bg-white mb-[20px]"
          defaultValue=""
        >
          <option disabled value="">
            Оберіть місто...
          </option>
        </select>
        <h3 className="self-start font-semibold text-[14px] mb-[10px]">
          Я хочу залишити:
        </h3>
        <div className="flex justify-between mb-[40px]">
          <label className=" relative flex items-center justify-center">
            <span className="absolute flex flex-col justify-center items-center">
              <DogIcon />
              Собаку
            </span>

            <input type="checkbox" name="dog" value="dog" />
          </label>
          <label className=" relative flex items-center justify-center">
            <span className="absolute flex flex-col justify-center items-center">
              <CatIcon />
              Кота
            </span>
            <input type="checkbox" name="cat" value="cat" />
          </label>
          <label className="relative flex items-center justify-center">
            <span className="absolute flex flex-col justify-center items-center">
              Інше
            </span>
            <input type="checkbox" name="other" value="other" />
          </label>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        type="submit"
        className="w-fit bg-main rounded-[5px] p-[10px] text-white text-lg font-semibold hover:bg-hover focus:bg-white focus:text-hover"
      >
        Знайти варіанти
      </button>
    </form>
  );
};
