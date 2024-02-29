import { markdownify } from "@lib/utils/textConverter";
import { FaCircleCheck } from "react-icons/fa6";
import axios from "axios";
import { useState, useEffect } from "react";

function Services() {
  // const { frontmatter } = data;
  // const { title, faqs } = frontmatter;



  return (
    <section className="section bg-primary">
     
      <div className="container pt-12 text-white">
        {markdownify("Emdaad Services", "h1", "text-center font-normal text-white")}
        <div className="section row -mt-6 rounded-xl">
          {/* {faq?.map((faq, index) => ( */}
            <div  className="col-12 mt-6 md:col-6 items-stretch flex ">
              <div className="p-12 shadow bg-white/10 text-white rounded-xl">
                <p className="ml-8 text-secondary text-sm font-extrabold">Service Tag</p>
                <div className=" flex gap-2 relative text-white">
                  <FaCircleCheck  className="text-secondary " size={25}/>
                  {markdownify("Service Title", "h4", "text-white")}
                </div>
                {markdownify('Service Description', "p", "faq-body mt-4")}
              </div>
            </div>
          {/* ))} */}
        </div>
      </div>
    </section>
  );
}

export default Services;
