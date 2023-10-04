import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-footer-texture bg-cover px-[10px] pb-[50px] pt-[20px]">
      <Link to="/" className="font-black text-2xl text-white">
        LOGO
      </Link>
      <ul className="flex flex-col gap-[30px] text-white font-semibold text-sm pt-[30px]">
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
    </footer>
  );
};
