const navItems = [
  { id: 1, name: "Home", url: "Home" },
  { id: 2, name: "About", url: "About" },
  { id: 3, name: "Process", url: "Work-Process" },
  { id: 4, name: "Projects", url: "Portfolio" },
  { id: 5, name: "Contact", url: "Contact" },
];

const Footer = () => {
  return (
    <footer className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">

        {/* Name */}
        <a
          href="#home"
          className="text-2xl sm:text-3xl font-semibold"
        >
          Deogrâce
        </a>

        {/* Navigation */}
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]"
              href={`#${item.url.toLowerCase()}`}
            >
              {item.name}

              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
      </div>

      {/* Template attribution */}
      <p className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10">
        Designed &amp; Developed with ❤️ using{" "}
        <a
          href="https://themewagon.com/"
          className="underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          ThemeWagon
        </a>
      </p>
    </footer>
  );
};

export default Footer;