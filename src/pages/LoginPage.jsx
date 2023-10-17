import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <form className="flex flex-col px-[104px] gap-5 pb-[30px]">
      <label className="flex flex-col gap-[5px] text-black font-semibold">
        Електронна пошта
        <input
          className="border-2 border-gray rounded-lg py-[5px] pl-[10px] w-[422px]"
          placeholder="Введіть електронну пошту"
          type="email"
        />
      </label>
      <label className="flex flex-col gap-[5px] text-black font-semibold">
        Пароль
        <input
          placeholder="Введіть пароль"
          className="border-2 border-gray rounded-lg py-[5px] pl-[10px] w-[422px]"
          type="password"
        />
      </label>
      <label className="flex gap-2 items-center text-black text-[18px]">
        <input
          type="checkbox"
          name=""
          className="appearance-none w-[20px] h-[20px] border-2 border-gray rounded-lg checked:bg-checked-input bg-contain"
        />
        Запам{`'`}ятати мене
      </label>
      <button
        className="p-[10px] w-fit bg-main text-white self-center rounded-lg text-lg font-semibold mb-[10px]"
        type="submit"
      >
        Увійти
      </button>
      <p className="flex flex-col self-center justify-center items-center text-lightBlack tracking-[1.30] mb-[182px]">
        Немає аккаунта?{" "}
        <Link to="/type" className="underline">
          Натисніть, щоб створити його
        </Link>
      </p>
    </form>
  );
};
