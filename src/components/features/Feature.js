import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBars} from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";

const Feature = () => {
  return (
    <section id='features' className='w-full py-20 border-b-[1px] border-d-black'>
      <Title title="Features" des="What I Do" />
      <div className='grid grid-cols-3 gap-20'>
        <Card 
          icon={<FaBars />}
          title="Business Strategy"
          des="Proident aute deserunt cillum irure quis id. Fugiat et ea adipisicing in. "
        />
        <Card 
          icon={<AiFillAppstore />}
          title="App Development"
          des="Proident aute deserunt cillum irure quis id. Fugiat et ea adipisicing in. "
        />
        <Card 
          icon={<SiProgress />}
          title="SEO Optimisation"
          des="Proident aute deserunt cillum irure quis id. Fugiat et ea adipisicing in. "
        />
        <Card 
          icon={<FaMobile />}
          title="Mobile Development"
          des="Proident aute deserunt cillum irure quis id. Fugiat et ea adipisicing in. "
        />
        <Card
          icon={<SiAntdesign />} 
          title="UX/UI Design"
          des="Proident aute deserunt cillum irure quis id. Fugiat et ea adipisicing in. "
        />
        <Card
          icon={<FaGlobe />}
          title="Hosting Websites"
          des="Proident aute deserunt cillum irure quis id. Fugiat et ea adipisicing in. "
        />
      </div>
    </section>
  )
}

export default Feature