"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect } from "react";

const Workflow = () => {
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
          <li role="article" className="relative pl-8 ">
            <div className="flex flex-1 flex-col gap-4">
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
              />

              <img
                src="https://i.imgur.com/R4ll09X.png"
                width={200}
                height={400}
              />
            </div>
          </li>
          {/* second */}
          <li role="article" className="relative pl-8 ">
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
              />

              <img
                src="https://i.imgur.com/uF1c5wL.png"
                width={700}
                height={400}
              />
            </div>
            <img src="https://i.imgur.com/A4DLBCT.png" width={200} className=""/>
          </li>
              {/* second */}
              <li role="article" className="relative pl-8 ">
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
                className="absolute -left-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full text-white ring-2 ring-white"
              >
                <img
                  src="https://i.pravatar.cc/48?img=13"
                  alt="user name"
                  title="user name"
                  width="48"
                  height="48"
                  className="max-w-full rounded-full"
                />
              </a>
              <h4 className="flex flex-col items-start text-lg font-medium leading-8 text-slate-700 md:flex-row lg:items-center">
                <span className="flex-1">
                  Manos Gaitanakis
                  <span className="text-base font-normal text-slate-500">
                    {" "}
                    commented
                  </span>
                </span>
                <span className="text-sm font-normal text-slate-400">
                  {" "}
                  3 hours ago
                </span>
              </h4>
              <p className=" text-slate-500">
                Love it! I really like how the nested feeds are working as well.
                Is that going to be multi-nested? Or maybe stay in just one
                level. Also any ides on how I can remove the time stamp from the
                feeds?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Workflow;
