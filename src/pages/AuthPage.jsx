import { Link, NavLink, Outlet } from "react-router-dom";

export const AuthPage = () => {
  return (
    <div className="flex flex-col justify-between items-center md:pt-[100px] pt-[10px] mb-[114px] px-[10px]">
      <div className="w-full md:max-w-[630px] min-w-[304px] h-fit border-2 border-main rounded-lg flex flex-col pb-[40px]">
        <div className="flex mb-[20px] h-fit">
          <NavLink
            className={({ isActive }) => {
              console.log(isActive);
              return `w-full inline-flex text-center items-center min-w-[150px] md:h-[100px] h-[50px] border-r-2 md:text-2xl font-semibold ${
                isActive ? "bg-white" : "border-b-2 bg-darkGray"
              } border-main`;
            }}
            to="/auth/login"
          >
            <span className="w-full">Вхід</span>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return `w-full inline-flex text-center bg-darkGray items-center min-w-[150px] md:h-[100px] h-[50px] md:text-2xl font-semibold ${
                isActive ? "bg-white" : "border-b-2 bg-darkGray"
              } border-main`;
            }}
            to="/auth/register/type"
          >
            <span className="w-full">Реєстрація</span>
          </NavLink>
        </div>
        <Outlet />
        <Link to="/" className="text-lightBlack self-center underline">
          Повернутися на головну
        </Link>
      </div>
    </div>
  );
};
