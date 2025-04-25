import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="w-full sticky top-[30px] left-0 right-0 z-50">
      <nav className="w-1/2 mx-auto bg-white/75 rounded-xl p-2  shadow-sm backdrop-blur-lg h-14 flex items-center justify-between">
        <Link href={"/"}>
          <Image src={"/taskerLogo.png"} alt="logo" width={45} height={45} />
        </Link>
        <NavBar />
      </nav>
    </header>
  );
};

export default Header;
