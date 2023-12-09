import { markdownify } from "@lib/utils/textConverter";
import { FaCircleCheck } from "react-icons/fa6";
import axios from "axios";
import { useState, useEffect } from "react";
import { IoTerminal } from "react-icons/io5";

function Faq({ data }) {
  const { frontmatter } = data;
  const { title, faqs } = frontmatter;

  const [faq, setFaq] = useState([])
  

  useEffect(()=>{
axios.get("https://strapi-155887-0.cloudclusters.net/api/faqs").then((res)=>{
  setFaq(res.data.data)
}).catch((err)=>{
  console.log(err)
})
  }, [])

  return (
    <section className="section bg-primary">
      <div className="container pt-12 text-white">
        {markdownify(title, "h1", "text-center font-normal text-white")}
        <div className="section row -mt-6 rounded-xl">
          {faq?.map((faq, index) => (
            <div key={index} className="col-12 mt-6 md:col-6 items-stretch flex ">
              <div className="p-12 shadow bg-white/10 text-white rounded-xl">
                <p className="ml-8 text-secondary text-sm font-extrabold">{faq?.attributes?.Tag}</p>
                <div className=" flex gap-2 relative text-white">
                  <FaCircleCheck  className="text-secondary " size={25}/>
                  {markdownify(faq?.attributes?.Question, "h4", "text-white")}
                </div>
                {markdownify(faq?.attributes?.Answer, "p", "faq-body mt-4")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
