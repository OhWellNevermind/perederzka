export const RegistrationForm = () => {
  return (
    <>
      <form className="flex flex-col px-[10px] md:px-[104px] gap-5 ">
        <label className="flex flex-col gap-[5px] text-black font-semibold">
          Ім{`'`}я
          <input
            className="placeholder:text-sm placeholder:font-normal border-2 border-gray rounded-lg py-[5px] pl-[10px]  w-full min-w-[280px] max-w-[422px]"
            placeholder="Введіть ім'я для вашого акаунту"
            type="text"
          />
        </label>
        <label className="flex flex-col gap-[5px] text-black font-semibold">
          Електронна пошта
          <input
            className="placeholder:text-sm placeholder:font-normal border-2 border-gray rounded-lg py-[5px] pl-[10px]  w-full min-w-[280px] max-w-[422px]"
            placeholder="Введіть електронну пошту"
            type="email"
          />
        </label>
        <label className="flex flex-col gap-[5px] text-black font-semibold">
          Пароль
          <input
            placeholder="Введіть пароль"
            className="placeholder:text-sm placeholder:font-normal border-2 border-gray rounded-lg py-[5px] pl-[10px]  w-full min-w-[280px] max-w-[422px]"
            type="password"
          />
        </label>
        <label className="flex flex-col gap-[5px] text-black font-semibold">
          Підтвердити пароль
          <input
            placeholder="Введіть пароль знову"
            className="placeholder:text-sm placeholder:font-normal border-2 border-gray rounded-lg py-[5px] pl-[10px]  w-full min-w-[280px] max-w-[422px]"
            type="password"
          />
        </label>
        <label className="flex gap-2 text-black text-[14px]">
          <input
            type="checkbox"
            name=""
            className="appearance-none w-[20px] h-[20px] border-2 border-gray rounded-lg checked:bg-checked-input bg-contain"
          />
          <p className="max-w-[250px] lg:max-w-none w-[392px]">
            <span className="leading-none">
              Я ознайомленний(-на) з{" "}
              <span className="underline text-main">Умовами</span> та
              згоден(-на) з{" "}
            </span>
            <span className="underline text-main">Правилами</span> використання
            сайту
          </p>
        </label>
        <button
          className="p-[10px] w-fit bg-main hover:bg-hover text-white self-center rounded-lg text-lg font-semibold mb-[20px]"
          type="submit"
        >
          Заруєструватися
        </button>
      </form>
    </>
  );
};
