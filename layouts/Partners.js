import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Partners() {
  const [partner, setPartner] = useState([]);

  useEffect(() => {
    axios
      .get("https://strapi-155887-0.cloudclusters.net/api/partners?populate=*")
      .then((response) => {
        setPartner(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section class="bg-gray-900">
      <div class="mx-auto max-w-screen-xl px-4 py-8 lg:py-16 lg:pb-24">
        <h2 class="mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:mb-16">
          Our Partners in Success
        </h2>
        <div class="grid grid-cols-2 gap-8  text-gray-400 sm:gap-12 md:grid-cols-3 lg:grid-cols-6">
          {partner?.map((item) => (
            <>
              <a href="#" class="flex items-center justify-center">
                <img
                  src={
                    `https://strapi-155887-0.cloudclusters.net` +
                    item?.attributes?.Logo?.data?.attributes?.url
                  }
                  className="h-9 hover:text-white"
                />
              </a>
            </>
          ))}

          
        </div>
      </div>
    </section>
  );
}

export default Partners;
