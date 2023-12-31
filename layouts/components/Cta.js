import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

function Cta({ cta }) {
  return (
    <section className="section px-4 bg-primary">
      <div className="section container rounded-xl  bg-white/10 shadow-md shadow-primary">
        <div className="row  mx-auto items-center justify-center">
          <div className="md:col-5 lg:col-2">
            <Image
              className="w-full"
              src="/images/short_logo.png"
              alt="call to action image"
              width={225}
              height={200}
            />
          </div>
          <div className="mt-5 text-center md:mt-0 md:text-left md:col-6 lg:col-5">
            <h2 className="text-white">{cta?.title}</h2>
            <p className="mt-6 text-white">{markdownify(cta?.content)}</p>
            {cta.button.enable && (
              <Link
                className="btn text-white border-transparent z-[1]  rounded-[30px] relative hover:shadow-[0_12px_24px_-6px_rgba(45,67,121,.1)] transition-all bg-[#ef7756] mt-4"
                href={cta.button.link}
                rel={cta.button.rel}
              >
                {cta.button.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
