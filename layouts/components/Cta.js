import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

function Cta({ cta }) {
  return (
    <section className=" bg-gray-900" >
      {/* <div className="section container rounded-xl  bg-white/10 shadow-md shadow-primary">
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
          <div className="mt-5 text-center md:mt-0 md:text-right md:col-6 lg:col-5">
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
      </div> */}



        <div class="justify-center flex-1  ">
            <div class="relative bg-center bg-no-repeat min-h-[400px] bg-cover"
                style={{ backgroundImage: 'url("https://i.imgur.com/iCvVrMH.png")'}}
                title="Bali, Indonesia">
                <div
                    class="absolute inset-0 flex flex-col items-center justify-center p-10 text-center text-white  bg-gray-900/90">
                    <div class="max-w-3xl mx-auto text-center">
                        <h2 class="text-2xl font-bold tracking-wide text-gray-100 my-7 dark:text-gray-300 md:text-5xl">
                        Your new business plan starts today!
                        </h2>
                        <p class="mb-8 text-base font-medium text-gray-300 dark:text-gray-400 md:text-lg">
                        Join us now and be a part of the best digital platform in the supply chain industry.
                        </p>
                        <div class="flex flex-wrap items-center justify-center">
                          <a href="/contact">
                            <button
                                class="btn btn-primary inline-flex items-center  ease-in-out duration-200">
                                <span>
                                  Know More
                                </span>
                               
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

  );
}

export default Cta;
