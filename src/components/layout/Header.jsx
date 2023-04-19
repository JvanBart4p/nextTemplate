import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/Logo_4PROCES_Groot-1.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__image">
          <Link href={"/"}>
            <Image src={logo} width={100} height={50} alt="test" />
          </Link>
        </div>
        <div>
          <ul className="header__links">
            <li>
              <Link href={"/dashboard"} passHref>
                Dashboard
              </Link>
            </li>
            <li><Link href={"/login"} passHref>
                Login
              </Link></li>
            <li>Header</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
