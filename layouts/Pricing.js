import Link from "next/link";
import Cta from "./components/Cta";
import { markdownify } from "@lib/utils/textConverter";

function Pricing({ data }) {
  const {
    frontmatter: { title, plans, call_to_action, feature },
  } = data;
  return (
    <>
      {/* banner */}
      <section class="bg-gray-700 bg-[url('https://i.imgur.com/iCvVrMH.png')] bg-fixed bg-center bg-no-repeat bg-blend-multiply">
        <div class="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
          <h1 class="mb-4 text-left text-2xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            Who We Are
          </h1>
          <p class="mb-8 max-w-2xl text-justify text-lg  font-normal text-gray-300 lg:text-xl">
            Established in 2020, Emdad Digital Platform is the fruit of hard
            work and thoughtful research conducted by business and technology
            experts with the aim of reinforcing the supply chain infrastructure
            in the Kingdom of Saudi Arabia, in line with the Saudi Vision 2030.
            Emdad acts as an intermediary between buyers and vendors and helps
            clients conduct their business in a secure and private manner and
            perform their work faster and more efficiently. We leverage a
            combination of AI-powered technologies and dedicated manpower to
            transform the logistics and purchasing processes from individual,
            semi-manual, arbitrary work to an organized and integrated digital
            process
          </p>
        </div>
      </section>

      {/* vision and mission */}
      <section className="section bg-body">
        <div className="container">
          <div className="text-center"></div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="feature-card rounded-xl bg-white p-5 pb-8 text-center">
              <div className="mt-4">
                <h4>Our Vision</h4>
                <p className="mt-3">
                  We aspire to be perceived as the best digital platform in the
                  supply chain industry. Our goals include establishing the
                  largest logistics stations for freight, offering the best
                  transport and storage solutions, partnering with the best
                  suppliers, and providing the best products, services, and raw
                  materials from all around the world.
                </p>
              </div>
            </div>
            <div className="feature-card rounded-xl bg-white p-5 pb-8 text-center">
              <div className="mt-4">
                <h4>Our Mission</h4>
                <p className="mt-3">
                We’re on a mission to make Emdad among the most prominent supply chain innovations within and beyond the Kingdom of Saudi Arabia. Powered by technology and market expertise, we never cease to go the extra mile and dedicate our research and development capabilities to overcome roadblocks and fulfill the market needs.
                </p>
              </div>
            </div>
            <div className="feature-card rounded-xl bg-white p-5 pb-8 text-center">
              <div className="mt-4">
                <h4>Our Values</h4>
                <p className="mt-3">
                Trust - Collaboration - Flexibility - Commitment - Innovation - Creativity - Achievement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* 
      <section className="section pb-0">
        <div className="container pt-12">
          <h1 className="text-center font-normal">Who We Are</h1>
          <div className="section row -mt-10 justify-center md:mt-0">
            {plans.map((plan, index) => (
              <div
                className={`col-12 md:col-4 ${
                  !plan.recommended ? "lg:px-0" : "col-recommended"
                }`}
                key={plan.title + index}
              >
                <div className="card text-center">
                  <h4>{plan.title}</h4>
                  <div className="mt-5">
                    <span className="text-5xl text-dark">${plan.price}</span>
                    <span>/ {plan.type}</span>
                  </div>
                  <h5 className="mt-2 font-normal text-text">
                    {plan.subtitle}
                  </h5>
                  <ul className="mt-5">
                    {plan.features.map((feature, index) => (
                      <li className="mb-[10px] leading-5" key={index}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    className={`btn mt-5 ${
                      plan.recommended ? "btn-primary" : "btn-outline-primary"
                    }`}
                    href={plan.button.link}
                    rel={plan.button.rel}
                  >
                    {plan.button.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* team */}
      <section>
        <div class="container mx-auto my-24 md:px-6">
          <section class="mb-32 text-center">
            <h2 class="mb-32 text-3xl font-bold">Meet Our Team</h2>

            <div class="grid gap-x-6 md:grid-cols-4 lg:gap-x-12">
              <div class="mb-24 md:mb-0">
                <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                  <div class="flex justify-center">
                    <div class="-mt-[75px] flex justify-center">
                      <img
                        src="https://i.imgur.com/a9UO0Lk.png"
                        class="mx-auto w-[150px] rounded-full shadow-lg dark:shadow-black/20"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-lg font-bold">Marta Smith</h5>
                    <p class="mb-6">Frontend Developer</p>
                  </div>
                </div>
              </div>

              <div class="mb-24 md:mb-0">
                <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                  <div class="flex justify-center">
                    <div class="-mt-[75px] flex justify-center">
                      <img
                        src="https://i.imgur.com/a9UO0Lk.png"
                        class="mx-auto w-[150px] rounded-full shadow-lg dark:shadow-black/20"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-lg font-bold">Marta Smith</h5>
                    <p class="mb-6">Frontend Developer</p>
                  </div>
                </div>
              </div>

              <div class="mb-24 md:mb-0">
                <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                  <div class="flex justify-center">
                    <div class="-mt-[75px] flex justify-center">
                      <img
                        src="https://i.imgur.com/cti2obV.png"
                        class="mx-auto w-[150px] rounded-full shadow-lg dark:shadow-black/20"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-lg font-bold">Darren Randolph</h5>
                    <p class="mb-6">Marketing expert</p>
                  </div>
                </div>
              </div>

              <div class="">
                <div class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                  <div class="flex justify-center">
                    <div class="-mt-[75px] flex justify-center">
                      <img
                        src="https://i.imgur.com/cti2obV.png"
                        class="mx-auto w-[150px] rounded-full shadow-lg dark:shadow-black/20"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-lg font-bold">Ayat Black</h5>
                    <p class="mb-6">Web designer</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Cta cta={call_to_action} />
    </>
  );
}

export default Pricing;
