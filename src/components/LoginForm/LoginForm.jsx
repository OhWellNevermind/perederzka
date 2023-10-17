import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <form className="flex flex-col sm:items-center md:px-[104px] px-[10px] gap-5 pb-[30px]">
      <label className="flex flex-col gap-[5px] text-black font-semibold w-full min-w-[280px] max-w-[422px]">
        Електронна пошта
        <input
          className="placeholder:text-sm placeholder:font-normal border-2 border-gray rounded-lg py-[5px] pl-[10px]"
          placeholder="Введіть електронну пошту"
          type="email"
        />
      </label>
      <label className="flex flex-col gap-[5px] text-black font-semibold w-full min-w-[280px] max-w-[422px]">
        Пароль
        <input
          placeholder="Введіть пароль"
          className="placeholder:text-sm placeholder:font-normal border-2 border-gray rounded-lg py-[5px] pl-[10px]"
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
        className="p-[10px] w-fit bg-main hover:bg-hover text-white self-center rounded-lg text-lg font-semibold mb-[10px]"
        type="submit"
      >
        Увійти
      </button>
      <p className="flex flex-col self-center justify-center items-center text-lightBlack tracking-[1.30] mb-[176px]">
        Немає аккаунта?{" "}
        <Link to="/auth/register/type" className="underline">
          Натисніть, щоб створити його
        </Link>
      </p>
    </form>
  );
};
