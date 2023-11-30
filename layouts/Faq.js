import { markdownify } from "@lib/utils/textConverter";
import { FaCircleCheck } from "react-icons/fa6";

function Faq({ data }) {
  const { frontmatter } = data;
  const { title, faqs } = frontmatter;
  return (
    <section className="section bg-primary">
      <div className="container pt-12 text-white">
        {markdownify(title, "h1", "text-center font-normal text-white")}
        <div className="section row -mt-6 rounded-xl">
          {faqs.map((faq, index) => (
            <div key={index} className="col-12 mt-6 md:col-6 items-stretch flex ">
              <div className="p-12 shadow bg-white/10 text-white rounded-xl">
                <div className=" flex gap-2 relative text-white">
                  <FaCircleCheck  className="text-secondary " size={25}/>
                  {markdownify(faq.title, "h4", "text-white")}
                </div>
                {markdownify(faq.answer, "p", "faq-body mt-4")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
