import Logo from "@components/Logo";
import config from "@config/config.json";
import menu from "@config/menu.json";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GrLanguage } from "react-icons/gr";


const Header = ({ arabic, setArabic }) => {
  
  //router
  const router = useRouter();

  const handleEnglish = (e) => {
    e.preventDefault();
    router.locale = "en-US"
    setArabic(false);
  };
  const handleArabic = (e) => {
    e.preventDefault();
    setArabic(true);
    router.locale = "ar"
  };


  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [navOpen, setNavOpen] = useState(false);

  // logo source
  const { logo } = config.site;
  const { enable, label, link } = config.nav_button;

  return (
    <header className="header" dir={router.locale === "ar" ? `rtl` : `ltr`}>
      <nav className="navbar mx-auto max-w-[1300px] px-4">
        {/* logo */}
        <div className="order-0 -mt-4">
          {router.locale === "ar" ? (
            <Logo src="/images/arabic-logo.png" />
          ) : (
            <Logo src={logo} />
          )}
        </div>

        {/* navbar toggler */}
        <button
          id="show-button"
          className="order-2 mt-4 flex cursor-pointer items-center md:order-1 md:hidden"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          ) : (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          )}
        </button>

        {/* Menu */}
        <div
          id="nav-menu"
          className={`order-3 md:order-1 ${
            navOpen ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <ul className="navbar-nav block w-full md:flex md:w-auto lg:space-x-2 ">
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li className="nav-item nav-dropdown group relative ">
                    <span className="nav-link inline-flex items-center">
                      {router.locale === "ar" ? menu.arabic : menu.name}
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <ul className="nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                      {menu.children.map((child, i) => (
                        <li className="nav-dropdown-item" key={`children-${i}`}>
                          <Link
                            href={child.url}
                            className="nav-dropdown-link block"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <>
                    {" "}
                    <li className="nav-item">
                      <Link
                        href={menu.url}
                        onClick={() => setNavOpen(false)}
                        className={`nav-link block ${
                          router.asPath === menu.url ? "nav-link-active" : ""
                        }`}
                      >
                        {router.locale === "ar" ? menu.arabic : menu.name}
                      </Link>
                    </li>
                  </>
                )}
              </React.Fragment>
            ))}

            <button>
              <Link 
              href={router.asPath}
              locale={router.locale === "en-US" ? "ar" : "en-US"}>
                <button className="duration-150 ease-in-out hover:text-secondary">
               <GrLanguage />
               </button></Link>
               </button>
           

            {enable && (
              <li className="md:hidden">
                <Link
                  className="btn btn-primary z-0 py-[14px]"
                  href={link}
                  rel=""
                >
                  {label}
                </Link>
              </li>
            )}
          </ul>
        </div>
        {enable && (
          <div className="d-flex order-1 ml-auto hidden min-w-[200px] items-center justify-end md:order-2 md:ml-0 md:flex">
            <Link className="btn btn-primary z-0 py-[14px]" href={link} rel="">
              {label}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
