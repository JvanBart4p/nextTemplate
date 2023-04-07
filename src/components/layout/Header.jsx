import Image from "next/image";
import logo from "../../../public/images/Logo_4PROCES_Groot-1.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__image">
          <Image src={logo} width={100} height={50} alt="test" />
        </div>
        <div>
          <ul className="header__links">
            <li>Header</li>
            <li>Header</li>
            <li>Header</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
