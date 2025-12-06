import { FaDumbbell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { menuData } from "../../MockData/data";
import { useState } from "react";
import SideMenu from "./SideMenu";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="container flex items-center justify-between py-8">
        {/* LOGO section  */}
        <div className="flex gap-2 text-2xl font-bold items-center uppercase">
          <FaDumbbell />
          <p>Coders</p>
          <p className="text-primary">Gym</p>
        </div>
        {/* MENU section  */}
        <div className="hidden md:block md:px-10">
          <ul className="flex gap-6 items-center text-gray-600">
            {menuData.map((item) => (
              <li
                className="inline-block py-1 px3 hover:text-primary duration-200 font-semibold"
                key={item.id}
              >
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* ICONS section  */}
        <div className=" flex gap-4 items-center">
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <CiSearch />
          </button>
          <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
            <IoCartOutline />
          </button>

          <button className="hidden md:block font-semibold text-lg border border-primary py-2 px-6 hover:bg-primary text-primary hover:text-white rounded-md duration-200">
            Login
          </button>
        </div>

        {/* MENU ICON section  */}
        <div className="font-semibold text-3xl hover:cursor-pointer">
          {isOpen ? (
            <IoCloseSharp
              className="md:hidden"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            />
          ) : (
            <IoMdMenu
              className="md:hidden"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            />
          )}
        </div>
        <SideMenu isOpen={isOpen} />
      </nav>
    </>
  );
};

export default Navbar;
