import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative bg-main flex px-[10px] pb-[50px] lg:pb-[41px] pt-[20px] lg:pt-[41px] lg:justify-center">
      <div className="w-full h-full absolute bg-no-repeat bg-contain md:bg-cover lg:bg-footer-size top-0 md:bg-center left-0 lg:left-[500px] bg-footer-texture opacity-10"></div>
      <div className=" flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-[1280px] w-full">
        <Link to="/" className="font-black text-2xl lg:text-[32px] text-white">
          LOGO
        </Link>
        <ul className="flex flex-col lg:flex-row gap-[30px] text-white font-semibold text-sm lg:text-[18px] pt-[30px] lg:pt-0">
          <li>
            <a href="#leftPet">Залишити тварину на перетримку</a>
          </li>
          <li>
            <a>Стати догсітером</a>
          </li>
          <li>
            <a href="#faqs">FAQs</a>
          </li>
          <li>
            <a>Правила та умови використання сайту</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
