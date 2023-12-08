import React from "react";
import { useState } from "react";

const Process = () => {
  const [start, setStart] = useState(false);

  return (
    <section class="section bg-primary">
      <div className="container text-center">
        <h2 class="mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-16">
          Procurement System Process Simulation
        </h2>
        {!start && (
          <button
            onClick={() => setStart(true)}
            className="btn relative z-[1] rounded-[30px] border-transparent bg-[#ef7756] tracking-wide text-white transition-all duration-200 ease-in-out hover:shadow "
          >
            START
          </button>
        )}

        {/* first step */}
        {start && (
         <><h5 className="text-left text-sm">Request Settings</h5><img src="https://i.imgur.com/WWzCrW1.png" width={300} height={800}/></>
        )}
      </div>

      
    </section>
  );
};

export default Process;
 