import config from "@config/config.json";
import Base from "@layouts/Baseof";
import Partners from "@layouts/Partners";
import Cta from "@layouts/components/Cta";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Process from "@layouts/Process";
import { getListPage } from "../lib/contentParser";
import axios from "axios";
import { useState, useEffect } from "react";
import { set } from "date-fns";
import About from "@layouts/About";
import Faq from "@layouts/Faq";
import Workflow from "@layouts/Workflow";
import { useRouter } from "next/router";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const Home = ({ frontmatter }) => {
  const router = useRouter();

  const { feature, services, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  const [stats, setStats] = useState([]);
  const [features, setFeatures] = useState([]);

  const [arabic, setArabic] = useState(false);

  const [banner, setBanner] = useState([])

  useEffect(() => {
    axios
      .get("https://strapi-155887-0.cloudclusters.net/api/statistics")
      .then((res) => {
        setStats(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://strapi-155887-0.cloudclusters.net/api/features")
      .then((res) => {
        setFeatures(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
      axios
      .get("https://strapi-155887-0.cloudclusters.net/api/home-banners")
      .then((res) => {
        setBanner(res.data.data[0].attributes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Base title={title} arabic={arabic} setArabic={setArabic}>
      <div className="hidden">
        <About arabic={arabic} setArabic={setArabic} />
        <Faq arabic={arabic} setArabic={setArabic} />
      </div>

      {/* Banner */}
      <main className="h-[100vh] w-full">
        <video
          autoPlay
          loop
          muted
          className=" h-full w-full object-cover"
          src="/hero.mp4"
        />
        <div className="container absolute top-0 w-full lg:mx-10">
          <div className=" m-0 h-[100vh] w-full bg-black/40 p-0 " >
            <div class=" mx-auto grid max-w-screen-xl px-4 pt-[300px] md:pt-[300px] lg:grid-cols-12 lg:gap-8 xl:gap-0">
              <div class=" mr-auto place-self-center lg:col-span-7">
                <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
                  Emdad Digital Platform
                </h1>

                <p class="mb-6 max-w-2xl font-light text-gray-300 md:text-lg lg:mb-2 lg:text-xl">
                  {banner?.Slogan}
                </p>
                <p>
                  <span className="mb-8 text-gray-300">
                   {banner?.Description}
                  </span>
                </p>

                <a
                  href="/about"
                  class="btn btn-primary inline-flex items-center justify-center text-sm"
                >
                  Who we are
                </a>
                <a
                  href="/contact"
                  class="transition ease-in-out duration-200 border-secondary mt-4 hover:border-b hover:border-secondary   mr-3 inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-white "
                >
                  Get started
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features */}
      <section className="section bg-primary">
        <div className="container">
          <div className="text-center">
            <h2>Why Us ?</h2>
            <p className="text-white/60">
              Whether you are a vendor or buyer, we craft innovative digital
              solutions to facilitate and sustain your business supply chain and
              transform all procurement and logistics processes into a digitally
              organized framework. Emdad Digital Platforms full-fledged
              procurement management system can be easily integrated within the
              operations of the suppliers and businesses in a smart and seamless
              way. 
            </p>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {features?.map((item, i) => (
              <div
                className="feature-card rounded-xl bg-white/10 p-5 pb-8 text-center text-white"
                key={`feature-${i}`}
              >
                <div className="mt-4 ">
                  {markdownify(item?.attributes?.Title, "h3", "h5")}
                  <p className="mt-3">{item?.attributes?.Description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="">
        <div class="bg-[#111827] py-24 sm:py-24 ">
          <div class="mx-auto container  ">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <div class="space-y-4 text-center">
                <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl ">
                All the tech in one platform
                </h2>
                <p class="text-lg leading-8 text-gray-300">
                  We can help you grow your audience and your business, no
                  matter the size.
                </p>
              </div>
              <dl class="mt-16 grid grid-cols-2 gap-0.5 overflow-hidden rounded-lg text-center sm:grid-cols-2 lg:grid-cols-7">
                {stats.map((item) => (
                  <>
                    <div class="flex flex-col bg-white/10 p-8 ">
                      <dt class="text-sm font-light leading-6 text-gray-300">
                        {item?.attributes?.Title}
                      </dt>
                      <dd class="order-first text-3xl font-semibold tracking-tight text-white">
                        {item?.attributes?.Number}
                      </dd>
                    </div>
                  </>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* blog posts */}

      {/* Partners */}
      <Partners />

      {/* workflow */}
      {/* <Workflow /> */}
      <Process />
      {/* Cta */}
      <Cta cta={call_to_action} />
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
