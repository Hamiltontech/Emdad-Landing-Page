import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Partners from "@layouts/Partners"
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { getListPage } from "../lib/contentParser";


const Home = ({ frontmatter }) => {
  const { banner, feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  return (
    <Base title={title}>
      {/* Banner */}
      {/* <section className="pb-[50px] bg-cover bg-fixed h-[750px]" style={{backgroundImage: 'url("/images/Hero.png")'}}>
        <div className=" bg-[#192435]/30 w-full h-[750px] relative">
          <div className="row text-left ">
            <div className="mx-auto lg:col-10 ">
              <h1 className="text-white font-extrabold">{banner.title}</h1>
              <p className="mt-4 text-white/80">{markdownify(banner.content)}</p>
              {banner.button.enable && (
                <Link
                  className="btn btn-primary mt-4"
                  href={banner.button.link}
                  rel={banner.button.rel}
                >
                  {banner.button.label}
                </Link>
              )}
              <Image
                className="mx-auto mt-12"
                src={banner.image}
                width={750}
                height={390}
                alt="banner image"
                priority
              />
            </div>
          </div>
        </div>
      </section> */}
      <section class="bg-white dark:bg-gray-900 section bg-cover bg-fixed h-[750px]" style={{backgroundImage: 'url("https://i.imgur.com/ATdkAwx.jpg")'}}>
        <div className="w-full m-0 p-0 bg-black/30 h-[750px]">
    <div class="grid max-w-screen-xl px-4  mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12 pt-[200px] md:pt-[200px]">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Emdad Digital Platform</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Digitally Transforming the B2B Procurement Experience!</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="#" class=" inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-full hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" /> */}
        </div>                
    </div>
    </div>
</section>

      {/* Features */}
      <section className="section bg-body">
        <div className="container">
          <div className="text-center">
            <h2>{markdownify(feature.title)}</h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {feature.features.map((item, i) => (
              <div
                className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
                key={`feature-${i}`}
              >
                {/* {item.icon && (
                  <Image
                    className="mx-auto"
                    src={item.icon}
                    width={30}
                    height={30}
                    alt=""
                  />
                )} */}
                <div className="mt-4">
                  {markdownify(item.name, "h3", "h5")}
                  <p className="mt-3">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center ">
        <hr className="w-[50%] text-white"/>
      </div>

      {/* Stats */}
      <section className="">
      <div class="bg-[#192435] py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <div class="text-center space-y-4">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Trusted by creators worldwide</h2>
        <p class="text-lg leading-8 text-gray-300">We can help you grow your audience and your business, no matter the
          size.
        </p>
      </div>
      <dl class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-full text-center sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex flex-col bg-white/5 p-8">
          <dt class="text-sm font-semibold leading-6 text-gray-300">words written in 2023</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-white">12 million</dd>
        </div>
        <div class="flex flex-col bg-white/5 p-8">
          <dt class="text-sm font-semibold leading-6 text-gray-300">episodes uploaded</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-white">10k</dd>
        </div>
        <div class="flex flex-col bg-white/5 p-8">
          <dt class="text-sm font-semibold leading-6 text-gray-300">hours of media</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-white">6.6k</dd>
        </div>
        <div class="flex flex-col bg-white/5 p-8">
          <dt class="text-sm font-semibold leading-6 text-gray-300">answers</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-white">2.1k</dd>
        </div>
      </dl>
    </div>
  </div>
</div>
</section>

   

      {/* workflow */}
      {/* <section className="section pb-0">
        <div className="mb-8 text-center">
          {markdownify(
            workflow.title,
            "h2",
            "mx-auto max-w-[400px] font-bold leading-[44px]"
          )}
          {markdownify(workflow.description, "p", "mt-3")}
        </div>
        <Image
          src={workflow.image}
          alt="workflow image"
          width={1920}
          height={296}
        />
      </section> */}




  {/* blog posts */}


      {/* Cta */}
      <Cta cta={call_to_action} />

      {/* Partners */}
  <Partners />
    </Base>
  );
};

export const getStaticProps = async () => {
  const homePage = await getListPage("content/_index.md");
  const { frontmatter } = homePage;
  return {
    props: {
      frontmatter,
    },
  };
};

export default Home;
