import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Education = () => {
  return (
      <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className="w-full flex gap-20">
        <div className="w-1/2">
          <div className="py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">0000-2022</p>
            <h2 className="text-4xl font-bold">Education Quality</h2>
          </div>
          <div className="mt-8 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="BSc in Computer Science"
              subtitle="Chiangmai University (2019 - 2022)"
              result="2.65/4"
              des="Aliqua elit aliqua in duis consectetur consequat in."
            />
            <ResumeCard
              title="BSc in Computer Science"
              subtitle="Chiangmai University (2019 - 2022)"
              result="2.65/4"
              des="Aliqua elit aliqua in duis consectetur consequat in."
            />
          </div>
        </div>

        <div className="w-1/2">
          <div className="py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">0000-2022</p>
            <h2 className="text-4xl font-bold">Education Quality</h2>
          </div>
          <div className="mt-8 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="BSc in Computer Science"
              subtitle="Chiangmai University (2019 - 2022)"
              result="2.65/4"
              des="Aliqua elit aliqua in duis consectetur consequat in."
            />
            <ResumeCard
              title="BSc in Computer Science"
              subtitle="Chiangmai University (2019 - 2022)"
              result="2.65/4"
              des="Aliqua elit aliqua in duis consectetur consequat in."
            />
          </div>
        </div>
      </motion.div>
  );
};

export default Education;
