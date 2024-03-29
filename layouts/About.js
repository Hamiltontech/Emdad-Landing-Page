import { FaHandshake } from "react-icons/fa";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import { MdLightbulbOutline } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { RiUserStarFill } from "react-icons/ri";
import { FaPeopleLine } from "react-icons/fa6";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";


function About() {
  const [team, setTeam] = useState([])
  const [visionMission, setVisionMission] = useState([])
  useEffect(()=>{
    axios.get("https://strapi-155887-0.cloudclusters.net/api/teams?populate=*").then((res)=>{
      setTeam(res.data.data)
    }).catch((err)=>{
      console.log(err)
    });
    axios.get("https://strapi-155887-0.cloudclusters.net/api/vision-missions").then((res)=>{
      setVisionMission(res.data.data[0].attributes)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])


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
      <section className="section bg-primary">
        <div className="container">
          <div className="text-center"></div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-2">
            <div className="feature-card rounded-xl bg-white/10 p-5 pb-8 text-center">
              <div className="mt-4">
                <h4>Our Vision</h4>
                <p className="mt-3 text-white">
                  {visionMission?.Vision}
                </p>
              </div>
            </div>
            <div className="feature-card rounded-xl bg-white/10 p-5 pb-8 text-center">
              <div className="mt-4">
                <h4>Our Mission</h4>
                <p className="mt-3 text-white">
                  {visionMission?.Mission}
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </section>


      <section className="section bg-primary">
        <div className="container text-center">
        <h3 className="text-white">Our Vlaues</h3>
          <div className="text-center"></div>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 justify-center ">
        
            <div className="feature-card rounded-full  p-5 pb-8 text-center">
              <div className="mt-4 flex justify-center gap-2">
              < FaPeopleLine size={30} color="white" className="" />
                <h4>Collaboration  </h4>
              </div>
            </div>
            <div className="feature-card rounded-full  p-5 pb-8 text-center">
              <div className="mt-4 flex justify-center gap-2">
              <FaArrowsTurnToDots size={20} color="white" className="mt-1" />
                <h4>Flexibility  </h4>
              </div>
            </div>
            <div className="feature-card rounded-full p-5 pb-8 text-center">
              <div className="mt-4 flex justify-center gap-2">
              <FaHandshake size={30} color="white" className="" />
                <h4>Commitment  </h4>
              </div>
            </div>
            <div className="feature-card rounded-full  p-5 pb-8 text-center">
              <div className="mt-4 flex justify-center gap-2">
              <MdLightbulbOutline  size={30} color="white" className="" />
                <h4>Innovation  </h4>
              </div>
            </div>
            <div className="feature-card rounded-full p-5 pb-8 text-center">
              <div className="mt-4 flex justify-center gap-2">
              <GiBrain size={30} color="white" className="" />
                <h4>Creativity </h4>
              </div>
            </div>
            <div className="feature-card rounded-full  p-5 pb-8 text-center">
              <div className="mt-4 flex justify-center gap-2">
              <RiUserStarFill size={25} color="white" className="mt-1" />
                <h4>Achievement </h4>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* team */}
      <section className="section bg-primary">
        <div class="container mx-auto my-24 md:px-6 ">
          <section class="mb-32 text-center">
            <h2 class="mb-32 text-3xl font-bold">Meet Our Team</h2>
            <div class="grid gap-x-6 md:grid-cols-4 lg:gap-x-12">
              {team?.map((item)=>(
                <>
              <div class="mb-24 md:mb-0">
                <div class="block h-full rounded-lg bg-white/10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                  <div class="flex justify-center">
                    <div class="-mt-[75px] flex justify-center">
                      <img
                        src={"https://strapi-155887-0.cloudclusters.net" + item?.attributes?.Avatar?.data?.attributes?.url}
                        class="mx-auto w-[150px] rounded-full shadow-lg dark:shadow-black/20"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div class="p-6">
                    <h5 class="mb-4 text-lg font-bold">{item?.attributes?.Name}</h5>
                    <p class="mb-6 text-white"> {item?.attributes?.Position}</p>
                  </div>
                </div>
              </div>
                </>
              ))}

            </div>
          </section>
        </div>
      </section>
      {/* <Cta cta={call_to_action} /> */}
    </>
  );
}

export default About;
