"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropdownCircle } from "react-icons/io";


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

  return (
    <div className="seciton bg-gray-900">
      <div className="container pb-8 text-white lg:pb-16">
        <h3 className="py-8 text-center text-white lg:py-16">
          Procurement System Process Simulation
        </h3>
        <ul
          aria-label="User feed"
          role="feed"
          className="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:left-8 before:top-0 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:bottom-6 after:left-8 after:top-6 after:-translate-x-1/2 after:border after:border-slate-200 "
          id="scroller"
        >
          {/* first */}
          <li role="article" className=" relative pl-8 ">
            <div className=" flex flex-1 flex-col gap-4">
              <a
                href="#"
                className="absolute -left-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white ring-2 ring-white"
              >
                <IoMdArrowDropdownCircle size={50} />
                
              </a>
              <div className="reveal grid gap-2">
              <h4 className="flex flex-col items-start text-lg font-medium leading-8 md:flex-row lg:items-center">
                <span> Request Settings</span>
              </h4>
              <img
                src="https://i.imgur.com/xa1huIL.png"
                width={400}
                className="reveal transition-opacity duration-700 ease-in"
              />
              <div className="reveal">
                <img
                  src="https://i.imgur.com/R4ll09X.png"
                  width={200}
                  height={400}
                />
              </div>
              </div>
            </div>
          </li>

          {/* second */}
          <li role="article" className=" relative pl-8">
            <div className="flex flex-1 flex-col gap-4">
              <a
                href="#"
                className="absolute -left-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white ring-2 ring-white"
              >
                <IoMdArrowDropdownCircle size={50} />
              </a>
              <div className="reveal grid gap-2">
              <h4 className="flex flex-col items-start text-lg font-medium leading-8 md:flex-row lg:items-center">
                <span> Request Creation</span>
              </h4>
              <img
                src="https://i.imgur.com/PnbFP8O.png"
                width={400}
                className="reveal transition-opacity duration-700 ease-in"
              />

              <img
                src="https://i.imgur.com/uF1c5wL.png"
                width={700}
                height={400}
              />
            </div>
            <img
              src="https://i.imgur.com/A4DLBCT.png"
              width={200}
              className="reveal transition-opacity duration-300 ease-in"
            />
            </div>
          </li>

          {/* Third */}
          <li role="article" className=" relative pl-8">
            <div className="flex flex-1 flex-col gap-4">
              <a
                href="#"
                className="absolute -left-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white ring-2 ring-white"
              >
                <IoMdArrowDropdownCircle size={50} />
              </a>
              <div className="reveal">
              <h4 className="flex flex-col items-start text-lg font-medium leading-8 md:flex-row lg:items-center">
                <span>Quotation Reception</span>
              </h4>
              <img
                src="https://i.imgur.com/P0DBn33.png"
                width={400}
                className="reveal transition-opacity duration-700 ease-in"
              />
              <img
                src="https://i.imgur.com/B5kasbH.png"
                width={700}
                height={400}
              />
            </div>
            </div>
          </li>

         

           {/* fourth */}
           <li role="article" className="relative pl-8 ">
            <div className="flex flex-1 flex-col gap-4">
              <a
                href="#"
                className="absolute -left-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white ring-2 ring-white"
              >
                <IoMdArrowDropdownCircle size={50} />
              </a>
              <div className="reveal grid gap-2">
              <h4 className="flex flex-col items-start text-lg font-medium leading-8  md:flex-row lg:items-center">
                <span>Purcase Order Creation</span>
              </h4>
              <div className="flex gap-4">
                <img
                  src="https://i.imgur.com/P0DBn33.png"
                  width={400}
                  className="reveal transition-opacity duration-700 ease-in"
                />
                <img
                  src="https://i.imgur.com/P0DBn33.png"
                  width={400}
                  className="reveal transition-opacity duration-700 ease-in"
                />
              </div>
              <img
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
              />
              </div>
            </div>
            <a
                href="#"
                className="absolute -left-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white ring-2 ring-white "
              >
                <IoMdArrowDropdownCircle size={50} />
              </a>
              <div className="reveal grid gap-2">
              <h4 className="flex flex-col items-start text-lg font-medium leading-8 md:flex-row lg:items-center">
                <span>Delivery Process</span>
              </h4>
              </div>
          </li>

           {/* fifth */}
           <li role="article" className="relative pl-8 ">
            <div className="flex flex-1 flex-col gap-4">
              <a
                href="#"
                className="absolute -left-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white ring-2 ring-white"
              >
                <IoMdArrowDropdownCircle size={50} />
              </a>
              <div className="reveal grid gap-2">
              <h4 className="flex flex-col items-start text-lg font-medium leading-8 md:flex-row lg:items-center">
                <span>Purcase Order Creation</span>
              </h4>
                <img
                  src="https://i.imgur.com/2wjC5ZK.png"
                  width={300}
                  className="reveal transition-opacity duration-700 ease-in"
                />
              <img
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
              />
              </div>
            </div>
          </li>

           {/* sixth */}
           <li role="article" className=" relative pl-8">
            <div className="flex flex-1 flex-col gap-4">
              <a
                href="#"
                className="absolute -left-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-white ring-2 ring-white"
              >
                <IoMdArrowDropdownCircle size={50} />
              </a>
              <div className="reveal">
              <h4 className="flex flex-col items-start text-lg font-medium leading-8 md:flex-row lg:items-center">
                <span>End of Payment</span>
              </h4>
              
              <img
                src="https://i.imgur.com/PMKxocm.png"
                width={400}
                height={400}
              />
            </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Workflow;
