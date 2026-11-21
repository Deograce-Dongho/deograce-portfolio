import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/images/logo1.png";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  // { id: 3, name: "Certificates", url: "certificates" },
  { id: 4, name: "Skills", url: "skills" },
  { id: 5, name: "Process", url: "work-process" },
  { id: 6, name: "Projects", url: "portfolio" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

// Shared props for every scroll link
const scrollProps = {
  smooth: true,
  duration: 900,
  spy: true,
  offset: -100,
};

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm"
          : "bg-[#faf7ff] border-b border-transparent"
      }`}
    >
      <nav className="content flex items-center justify-between gap-4 px-4 xxl:px-0 py-3">
        <div className="flex items-center gap-1">
          {/* Mobile menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              aria-label="Open menu"
              className="btn btn-ghost btn-sm px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content z-10 mt-3 w-[calc(100vw-2rem)] rounded-2xl border border-purple-100 bg-white p-2 font-semibold text-[#132238] shadow-xl"
            >
              {navItems.map((item) => (
                <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
                  <Link
                    {...scrollProps}
                    to={item.url}
                    onClick={handleMenuClick}
                    activeClass="!bg-picto-primary !text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link {...scrollProps} to="contact" onClick={handleMenuClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="introduction"
            smooth={true}
            duration={900}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src={logo}
              alt="Deogrâce Dongho"
              className="h-11 sm:h-12 w-auto object-contain"
            />
            <span className="leading-none">
              <span className="font-display block text-xl sm:text-2xl font-bold text-[#132238]">
                Deogrâce
              </span>
              <span className="block text-[10px] font-semibold tracking-[0.25em] text-picto-primary mt-1">
                PORTFOLIO
              </span>
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex items-center gap-1 rounded-full border border-purple-100 bg-white/70 backdrop-blur p-1.5 shadow-sm">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                {...scrollProps}
                to={item.url}
                activeClass="!bg-picto-primary !text-white shadow-md shadow-purple-300/50"
                className="block cursor-pointer rounded-full px-5 py-2 text-[15px] font-medium text-[#424E60] hover:text-picto-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact button */}
        <Link
          {...scrollProps}
          to="contact"
          className="group inline-flex items-center gap-2 cursor-pointer rounded-xl bg-picto-primary px-4 sm:px-5 py-2.5 text-[14px] sm:text-[15px] font-semibold text-white shadow-md shadow-purple-300/50 hover:bg-picto-primary-dark transition-colors duration-300"
        >
          Contact
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-[12px] group-hover:translate-x-1 transition-transform duration-300"
          />
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
