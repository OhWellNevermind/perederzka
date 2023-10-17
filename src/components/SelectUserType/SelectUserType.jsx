import { useState } from "react";
import { UserIcon } from "../icons/UserIcon";
import { DogSitterIcon } from "../icons/DogSitterIcon";
import { Link } from "react-router-dom";

export const SelectUserType = () => {
  const [userType, setUserType] = useState("user");
  return (
    <div className="px-10">
      <div className="max-w-[550px] flex flex-col gap-[30px]">
        <legend className="text-lg font-semibold">
          Який акаунт ви собі хочете?
        </legend>
        <label className="cursor-pointer">
          <input
            className="peer sr-only "
            type="radio"
            value="user"
            checked={userType === "user"}
            onChange={(e) => {
              setUserType(e.target.value);
            }}
          />
          <div className="rounded-lg flex items-center border-[1px] py-5 pl-5 border-black w-full h-fit peer-checked:border-main peer-checked:bg-mainLight peer-checked:border-2">
            <div className="mr-[50px]">
              <UserIcon className="h-[95px] w-[60px]" />
            </div>
            <div className="max-w-[400px]">
              <h3 className="mb-[10px] text-lg font-semibold">
                Акаунт користувача
              </h3>
              <p className="text-lg">
                Дозволяє оцінювати догсітерів та залишати відгуки.
              </p>
            </div>
          </div>
        </label>
        <label className="cursor-pointer mb-10">
          <input
            className="peer sr-only "
            type="radio"
            value="dogSitter"
            checked={userType === "dogSitter"}
            onChange={(e) => {
              setUserType(e.target.value);
            }}
          />
          <div className="rounded-lg flex items-center border-[1px] py-5 pl-5 border-black w-full h-fit peer-checked:border-main peer-checked:bg-mainLight peer-checked:border-2">
            <div className="mr-[50px]">
              <DogSitterIcon className="h-[95px] w-[60px]" />
            </div>
            <div className="">
              <h3 className="mb-[10px] text-black text-lg font-semibold">
                Акаунт догсітера
              </h3>
              <p className="text-lg max-w-[400px]">
                Догсітер — людина, яка приглядає за тваринами та бере їх на
                перетримку. З цим акаунтом ви зможете створити оголошення про
                те, що ви готові взяти тварину на перетримку.
              </p>
            </div>
          </div>
        </label>
        <Link
          to={`${userType}`}
          className="self-center w-[185px] p-[10px] rounded-lg bg-main text-center text-lg font-semibold text-white mb-[30px]"
        >
          Далі
        </Link>
      </div>
    </div>
  );
};
