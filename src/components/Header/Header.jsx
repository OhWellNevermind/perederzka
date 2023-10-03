import { HiOutlineMenu } from "react-icons/hi";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className="bg-[#FBFBFB]  border-b-2 border-b-[#D9D9D9]">
      <Container>
        <div className="flex justify-between items-center">
          <p className="font-black text-2xl text-main">LOGO</p>
          <button type="button">
            <HiOutlineMenu size={24} fill="#17BBDE" stroke="#17BBDE" />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
