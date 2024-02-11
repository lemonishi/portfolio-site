import { useState } from "react";

export default function NavBar() {
  const [navActive, setNavActive] = useState(false);
  const handleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header className="flex justify-center w-full sticky top-0">
      <nav className="flex items-center justify-between p-4 px-16 h-[80px] text-white bg-black bg-opacity-60 z-50 max-w-screen-2xl w-[inherit]">
        <div className="text-lg">
          <a href="">Home</a>
        </div>
        <img
          src="public/nav-icon.svg"
          alt="SVG Image"
          className={`w-auto h-6 z-200 sm:hidden ${navActive ? "hidden" : "flex"}`}
          onClick={handleNav}
        />
        <img
          src="public/nav-cross.svg"
          alt="SVG Image"
          className={`w-auto h-6 z-100 sm:hidden ${navActive ? "flex" : "hidden"}`}
          onClick={handleNav}
        />
        <ul
          className={`${navActive ? "flex" : "hidden"} flex-col fixed inset-y-0 left-[50%] right-0 bg-black bg-opacity-60 backdrop-blur-sm gap-8 py-nav-content px-4 text-lg sm:flex sm:flex-row sm:p-0 sm:static sm:justify-between sm:bg-transparent`}
        >
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contacts</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
