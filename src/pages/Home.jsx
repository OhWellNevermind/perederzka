import { useState } from "react";
import Container from "../components/Container/Container";
import { DogIcon } from "../components/icons/DogIcon";
import { CatIcon } from "../components/icons/CatIcon";

const Home = () => {
  const [pet, setPet] = useState("");

  return (
    <Container>
      <h1 className="text-center text-[24px] font-semibold mt-[10px] pb-[30px] whitespace-pre-wrap">
        <span className="pl-[20px]">Допоможемо вам</span>
        <span className="text-main "> знайти ідеальне місце </span>
        <span className="pl-[20px]">для ваших домашніх улюбленців</span>
      </h1>
      <form className="flex flex-col items-center pt-[20px] pb-[30px] rounded-[5px] border-4 border-[#EBEBEB] bg-[#F9F9F9]">
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

              <input
                onChange={(e) => {
                  setPet(e.target.value);
                }}
                type="radio"
                name="dog"
                value="dog"
                checked={pet === "dog"}
              />
            </label>
            <label className=" relative flex items-center justify-center">
              <span className="absolute flex flex-col justify-center items-center">
                <CatIcon />
                Кота
              </span>
              <input
                onChange={(e) => {
                  setPet(e.target.value);
                }}
                type="radio"
                name="cat"
                checked={pet === "cat"}
                value="cat"
              />
            </label>
            <label className="relative flex items-center justify-center">
              <span className="absolute flex flex-col justify-center items-center">
                Інше
              </span>
              <input
                onChange={(e) => {
                  setPet(e.target.value);
                }}
                checked={pet === "other"}
                type="radio"
                name="other"
                value="other"
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-fit bg-main rounded-[5px] p-[10px] text-white text-lg font-semibold"
        >
          Знайти варіанти
        </button>
      </form>
    </Container>
  );
};

export default Home;
