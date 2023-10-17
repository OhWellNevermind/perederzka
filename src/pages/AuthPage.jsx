import { Link, NavLink, Outlet } from "react-router-dom";

export const AuthPage = () => {
  return (
    <div className="flex flex-col justify-between items-center pt-[100px] mb-[114px]">
      <div className="w-fit h-fit border-2 border-main rounded-lg flex flex-col pb-[40px]">
        <div className="flex mb-[20px] h-fit">
          <NavLink
            className={({ isActive }) => {
              console.log(isActive);
              return `inline-flex text-center items-center min-w-[315px] h-[100px] border-r-2 text-black text-2xl font-semibold ${
                isActive ? "bg-white" : "border-b-2 bg-darkGray"
              } border-main`;
            }}
            to="/auth/login"
          >
            <span className="w-full">Вхід</span>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return `inline-flex text-center bg-darkGray items-center min-w-[315px] h-[100px] text-black text-2xl font-semibold ${
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
