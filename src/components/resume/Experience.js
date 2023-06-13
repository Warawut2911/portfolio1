import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
      <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
        <div className="w-full lgl:w-1/2">
          <div className="py-6 lgl:py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
            <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
          </div>
          <div className="mt-2 lgl:mt-8 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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

        <div className="w-full lgl:w-1/2">
          <div className="py-6 lgl:py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
            <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
          </div>
          <div className="mt-2 lgl:mt-8 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
  )
}

export default Experience