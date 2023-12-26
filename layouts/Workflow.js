'use client'
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { useRef } from "react";






const Workflow = () => {

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
  

  // const ref1 = useRef();
  //   const isVisible1 = useIsVisible(ref1);

  //   const ref2 = useRef();
  //   const isVisible2 = useIsVisible(ref2);

  //   const ref3 = useRef();
  //   const isVisible3 = useIsVisible(ref3);


  return (
    <div className="seciton bg-gray-900">
      <div className="container pb-8 text-white lg:pb-16 ">
        <h3 className="py-8 text-center text-white lg:py-16">
          Procurement System Process Simulation{" "}
        </h3>

        <ul
          aria-label="User feed"
          role="feed"
          className="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:left-8 before:top-0 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:bottom-6 after:left-8 after:top-6 after:-translate-x-1/2 after:border after:border-slate-200 "
          id="scroller"
        >

          {/* first */}
          <li role="article" className="relative pl-8 reveal ">
            <div  className=" flex flex-1 flex-col gap-4 ">
              <a
                href="#"
                className="absolute -left-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white ring-2 ring-white"
              >
                <IoIosArrowDown size={50} />
              </a>
              <h4 className="flex flex-col items-start text-lg font-medium leading-8 md:flex-row lg:items-center">
                <span> Request Settings</span>
              </h4>
              <img
                src="https://i.imgur.com/xa1huIL.png"
                width={400}
                className="reveal transition-opacity ease-in duration-700"
              />
              <div className="reveal">
              <img
                src="https://i.imgur.com/R4ll09X.png"
                width={200}
                height={400}
              />
              </div>
            </div>
          </li>

          {/* second */}
          <li role="article" className="relative pl-8 reveal">
            <div className="flex flex-1 flex-col gap-4">
              <a
                href="#"
                className="absolute -left-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white ring-2 ring-white"
              >
                <IoIosArrowDown size={50} />
              </a>
              <h4 className="flex flex-col items-start text-lg font-medium leading-8 md:flex-row lg:items-center">
                <span> Request Creation</span>
              </h4>
              <img
                src="https://i.imgur.com/PnbFP8O.png"
                width={400}
                className="reveal transition-opacity ease-in duration-700"
              />

              <img
                src="https://i.imgur.com/uF1c5wL.png"
                width={700}
                height={400}
              />
            </div>
            <img src="https://i.imgur.com/A4DLBCT.png" width={200} className="reveal transition-opacity ease-in duration-300"/>
          </li>

              {/* Third */}
              <li role="article" className="relative pl-8 reveal">
            <div className="flex flex-1 flex-col gap-4">
              <a
                href="#"
                className="absolute -left-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white ring-2 ring-white"
              >
                <IoIosArrowDown size={50} />
              </a>
              <h4 className="flex flex-col items-start text-lg font-medium leading-8 md:flex-row lg:items-center">
                <span>Quotation Reception</span>
              </h4>
              <img
                src="https://i.imgur.com/P0DBn33.png"
                width={400}
                className="reveal transition-opacity ease-in duration-700"
              />

              <img
                src="https://i.imgur.com/B5kasbH.png"
                width={700}
                height={400}
              />
            </div>
            {/* <img src="https://i.imgur.com/A4DLBCT.png" width={200} className=""/> */}
          </li>




          {/* not prepared */}
          <li role="article" className="relative pl-8 ">
            <div className="flex flex-1 flex-col gap-4">
              <a
                href="#"
                className="absolute -left-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full text-white ring-2 ring-white bg-black"
              >
               <IoIosArrowDown size={50} />
              </a>
              <h4 className="flex flex-col items-start text-lg font-medium leading-8 text-slate-700 md:flex-row lg:items-center">
                <span className="flex-1">
                 Under
                  <span className="text-base font-normal text-slate-500">
                    Progress
                  </span>
                </span>
               
              </h4>
             
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Workflow;
