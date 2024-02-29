import { markdownify } from "@lib/utils/textConverter";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import axios from "axios";
import {useState, useEffect} from 'react'

function Services() {
  const [service, setService] = useState([])
useEffect(()=>{
axios.get("https://strapi-155887-0.cloudclusters.net/api/services").then((response)=>{
  setService(response.data.data)
}).catch((error)=>{
  console.log(error)
})
}, [])


  return (
    <section className="section bg-primary">
     
      <div className="container pt-12 text-white">
        {markdownify("Emdaad Services", "h1", "text-center font-normal text-white")}
        <div className="section row -mt-6 rounded-xl">
          {service?.map((ser, index) => (
            <div key={index} className="col-12 mt-6 md:col-6 items-stretch flex ">
              <div className="p-12 shadow bg-white/10 text-white rounded-xl">
                {/* <p className="ml-8 text-secondary text-sm font-extrabold">{ser?.attributes?.Title}</p> */}
                <div className=" flex gap-2 relative text-white">
                  <MdOutlineMiscellaneousServices  className="text-secondary " size={45}/>
                  {markdownify(ser?.attributes?.Title, "h4", "text-white")}
                </div>
                {markdownify(ser?.attributes?.Description, "p", "faq-body mt-4")}
              </div>
            </div>
         ))} 
        </div>
      </div>
    </section>
  );
}

export default Services;
