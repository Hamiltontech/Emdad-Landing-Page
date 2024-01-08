import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Process() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  if (typeof window !== "undefined") {
    // Client-side-only code
    window.addEventListener("scroll", reveal);
  }

  return (
    <section className="scroll-section-outer bg-gray-900">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          {/* first */}
          <div className="scroll-section">
            <div className="reveal grid gap-2 ">
              <h3 className="flex flex-col items-start text-lg font-medium leading-8 md:flex-row lg:items-center text-white">
                <span>Procurement System Process Simulation</span>
              </h3>
              <p className="reveal duration-300 ease-in text-white/60 text-center">Scroll..</p>
            </div>
          </div>
         
         
          {/* first */}
          <div className="scroll-section ">
            <div className="reveal grid gap-2 ">
              <h4 className="flex flex-col items-start text-lg font-medium leading-8 md:flex-row lg:items-center">
                <span> Request Settings</span>
              </h4>
              <img
                src="https://i.imgur.com/VSQeoSF.png"
                width={800}
                className="reveal transition-opacity duration-700 ease-in"
              />
              <div className="reveal">
                {/* <img
                  src="https://i.imgur.com/R4ll09X.png"
                  width={200}
                  height={400}
                /> */}
              </div>
            </div>
          </div>

          {/* second */}
          <div className="scroll-section ">
            <div className="reveal grid gap-2 ">
              <h4 className="flex flex-col items-start text-lg font-medium leading-8 md:flex-row lg:items-center">
                <span> Request Creation</span>
              </h4>

              <img
                src="https://i.imgur.com/L3AOTev.png"
                width={800}
                className="reveal transition-opacity duration-700 ease-in"
              />

              {/* <img
                src="https://i.imgur.com/uF1c5wL.png"
                width={700}
                height={400}
              />
              <div className="reveal">
                <img
                  src="https://i.imgur.com/A4DLBCT.png"
                  width={200}
                  className="reveal transition-opacity duration-300 ease-in"
                />
              </div> */}
            </div>
          </div>

          {/* third */}
          <div className="scroll-section ">
            <div className="reveal grid gap-2 ">
              <div className="reveal">
                <h4 className="flex flex-col items-start text-lg font-medium leading-8 md:flex-row lg:items-center">
                  <span>Quotation Reception</span>
                </h4>
                <img
                  src="https://i.imgur.com/VGvSKWt.png"
                  width={800}
                  className="reveal transition-opacity duration-700 ease-in"
                />
                {/* <img
                  src="https://i.imgur.com/B5kasbH.png"
                  width={700}
                  height={400}
                /> */}
              </div>
            </div>
          </div>

          {/* fourth */}
          <div className="scroll-section  ">
            <div className="reveal grid gap-2">
              <h4 className="flex flex-col items-start text-lg font-medium leading-8  md:flex-row lg:items-center">
                <span>Purcase Order Creation</span>
              </h4>
              <div className="flex gap-4">
                <img
                  src="https://i.imgur.com/ST3vw95.png"
                  width={800}
                  className="reveal transition-opacity duration-700 ease-in"
                />
                {/* <img
                  src="https://i.imgur.com/P0DBn33.png"
                  width={400}
                  className="reveal transition-opacity duration-700 ease-in"
                /> */}
              </div>
              {/* <img
                src="https://i.imgur.com/oWDKpqf.png"
                width={900}
                height={400}
                className="reveal"
              />

              <img
                src="https://i.imgur.com/cqxBbxd.png"
                width={300}
                height={400}
                className="reveal transition-opacity duration-700 ease-in"
              /> */}
            </div>

          </div>


          {/* fifth */}
          <div className="scroll-section ">
           {/* <h4>Delivery Process</h4> */}
              <div className="reveal grid gap-2">
              <h4 className="flex flex-col items-start text-lg font-medium leading-8 md:flex-row lg:items-center">
                <span>Purcase Order Creation</span>
              </h4>
                <img
                  src="https://i.imgur.com/vNneijQ.png"
                  width={800}
                  className="reveal transition-opacity duration-700 ease-in"
                />
              {/* <img
                src="https://i.imgur.com/fVLmLuq.png"
                width={600}
                height={400}
                className="reveal"
              />
              <img
                src="https://i.imgur.com/zJf9ARG.png"
                width={400}
                height={400}
                className="reveal transition-opacity duration-700 ease-in"
              /> */}
              </div>
          </div>


          {/* sixth */}
          <div className="scroll-section">
        
              <div className="reveal">
              <h4 className="flex flex-col items-start text-lg font-medium leading-8 md:flex-row lg:items-center">
                <span>End of Payment</span>
              </h4>
              
              <img
                src="https://i.imgur.com/hnV68nm.png"
                width={800}
                height={400}
              />
            </div>
            </div>
           
        </div>
      </div>
    </section>
  );
}

export default Process;
