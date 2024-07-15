import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo";
import Dropdown from "./Dropdown";

const navItems = [
  { name: "Rent", slug: "/", active: true },
  { name: "Buy", slug: "/buy", active: true },
  { name: "Sell", slug: "/sell", active: true },
  {
    name: "Manage Property",
    slug: "/manage-property",
    active: true,
    dropDown: true,
    items: [
      { name: "Sub Item 1", slug: "/manage-property/subitem1" },
      { name: "Sub Item 2", slug: "/manage-property/subitem2" },
    ],
  },
  {
    name: "Resources",
    slug: "/Resources",
    active: true,
    dropDown: true,
    items: [
      { name: "Sub Item 3", slug: "/Resources/subitem3" },
      { name: "Sub Item 4", slug: "/Resources/subitem4" },
    ],
  },
];

function Header() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(null);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="flex flex-col justify-evenly md:flex-row  mx-auto px-2 py-5 ">
        <Link to="/">
          <Logo />
        </Link>

        <div className="md:hidden absolute right-0 top-5 pr-5">
          <button
            className="text-[#100a55] focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          }  md:flex md:gap-2 justify-center md:text-xl md:ml-auto`}
        >
          {navItems.map(
            (item, index) =>
              item.active && (
                <li key={item.name} className="li-text">
                  {item.dropDown ? (
                    <div className="relative">
                      <button
                        className="inline-block px-4
                         py-2 duration-200 rounded-full
                          hover:underline focus:outline-none 
                          text-sm md:text-base lg:text-lg
                           xl:text-xl"
                        onClick={() => handleDropdownToggle(index)}
                        aria-haspopup="true"
                        aria-expanded={dropdownOpen === index}
                      >
                        {item.name}
                      </button>
                      {dropdownOpen === index && (
                        <Dropdown
                          items={item.items}
                          onClose={handleDropdownClose}
                        />
                      )}
                    </div>
                  ) : (
                    <button
                      className="inline-block
                       px-4 py-2 duration-200
                        rounded-full hover:underline
                         focus:outline-none text-sm
                          md:text-base lg:text-lg 
                          xl:text-xl"
                      onClick={() => {
                        navigate(item.slug);
                        setMenuOpen(false); // Close menu on navigation
                      }}
                    >
                      {item.name}
                    </button>
                  )}
                </li>
              )
          )}
        </ul>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex gap-3 justify-end 
          md:gap-5 md:justify-center md:items-center`}
        >
          <Link to={'/signin'}>
          <button className="text-[#100a55]
           mx-5 font-semibold text-sm 
            md:text-base lg:text-lg
             xl:text-xl">
            Login
          </button>
          </Link>
          <Link to={'/signup'}>
          <button className="bg-[#7065f0]
           text-white font-semibold sm:p-1
            text-nowrap p-2 rounded-md
             text-sm md:text-base 
             lg:text-lg xl:text-xl">
            Sign up
          </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
