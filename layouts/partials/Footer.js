import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Footer = ({arabic, setArabic}) => {
  const { copyright, footer_content, arabic_footer_content, arabic_copyright } = config.params;
  const { footer } = menu;
  return (
    <footer className="section pb-0 bg-primary text-white" dir={arabic ? `rtl` : `ltr`}>
      <div className="container">
        {/* footer menu */}
        <div className="row ">
          {footer.map((col) => {
            return (
              <div className="mb-12 sm:col-6 lg:col-3 " key={col.name}>
                {arabic ? markdownify(col.arabic, "h2", "h4") : markdownify(col.name, "h2", "h4")}
                
                <ul className="mt-6">
                  {col?.menu.map((item) => (
                    <li className="mb-1" key={item.text}>
                      <Link href={item.url} rel="">
                        
                        {arabic ? item.arabic : item.text }
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          {/* social icons */}
          <div className="md-12 sm:col-6 lg:col-3">
            <Link href="/" aria-label="Bigspring">
              <Image
                src={config.site.logo_footer}
                width={config.site.logo_width}
                height={config.site.logo_height}
                alt=""
              />
            </Link>
            {arabic ? markdownify(arabic_footer_content, "p", "mt-3 mb-6") : markdownify(footer_content, "p", "mt-3 mb-6")}
          
            <Social source={social} className="social-icons mb-8" />
          </div>
        </div>
      </div>
        {/* copyright */}
        <div className="  py-6 bg-[#111827]">
          {arabic ? 
           markdownify(arabic_copyright, "p", "text-sm text-center")
          :
          markdownify(copyright, "p", "text-sm text-center")
          }
          
        </div>
    </footer>
  );
};

export default Footer;
