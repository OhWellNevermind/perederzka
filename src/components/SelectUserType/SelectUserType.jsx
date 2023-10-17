import { useState } from "react";
import { UserIcon } from "../icons/UserIcon";
import { DogSitterIcon } from "../icons/DogSitterIcon";
import { Link } from "react-router-dom";

export const SelectUserType = () => {
  const [userType, setUserType] = useState("user");
  return (
    <div className="px-[10px] md:px-10 flex items-center justify-center">
      <div className="max-w-[550px] flex flex-col md:gap-[30px]">
        <h3 className="text-sm md:text-lg font-semibold mb-[20px] md:mb-0">
          Який акаунт ви собі хочете?
        </h3>
        <label className="cursor-pointer mb-[10px] md:mb-0">
          <input
            className="peer sr-only "
            type="radio"
            value="user"
            checked={userType === "user"}
            onChange={(e) => {
              setUserType(e.target.value);
            }}
          />
          <div className="rounded-lg flex items-center  border-[1px] py-5 pl-[10px] md:pl-5 border-black w-full h-fit peer-checked:border-main peer-checked:bg-mainLight peer-checked:border-2">
            <div className="mr-[20px] md:mr-[50px]">
              <UserIcon className="h-[64px] md:h-[95px] w-[40px] md:w-[60px]" />
            </div>
            <div className="max-w-[190px] md:max-w-[400px]">
              <h3 className="mb-[10px] text-sm md:text-lg font-semibold">
                Акаунт користувача
              </h3>
              <p className="text-sm md:text-lg">
                Дозволяє оцінювати догсітерів та залишати відгуки.
              </p>
            </div>
          </div>
        </label>
        <label className="w-full cursor-pointer mb-5 md:mb-10">
          <input
            className="peer sr-only "
            type="radio"
            value="dogSitter"
            checked={userType === "dogSitter"}
            onChange={(e) => {
              setUserType(e.target.value);
            }}
          />
          <div className="rounded-lg flex items-center border-[1px] py-5 pl-[10px] pr-[10px] md:pr-0 md:pl-5 border-black w-full h-fit peer-checked:border-main peer-checked:bg-mainLight peer-checked:border-2">
            <div className="mr-[20px] md:mr-[50px]">
              <DogSitterIcon className="h-[64px] md:h-[95px] w-[40px] md:w-[60px]" />
            </div>
            <div className="">
              <h3 className="mb-[10px] text-sm md:text-lg font-semibold">
                Акаунт догсітера
              </h3>
              <p className="text-sm md:text-lg max-w-[190px] md:max-w-[400px]">
                Догсітер — людина, яка приглядає за тваринами та бере їх на
                перетримку. З цим акаунтом ви зможете створити оголошення про
                те, що ви готові взяти тварину на перетримку.
              </p>
            </div>
          </div>
        </label>
        <Link
          to={`${userType}`}
          className="self-center w-[185px] p-[10px] rounded-lg bg-main hover:bg-hover text-center text-lg font-semibold text-white mb-[20px] md:mb-[30px]"
        >
          Далі
        </Link>
      </div>
    </div>
  );
};
