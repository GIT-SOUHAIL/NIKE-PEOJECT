import {services } from '../constant/index'
import { motion } from 'framer-motion'
const Services = () => {
  return (
    <motion.section
    initial={{opacity : 0 , scale:0.7 }}
    whileInView={{opacity : 1 , scale:1 }}
    transition={{duration:1.5 , type:"keyframes"}}  
    className="w-full my-[6rem] ">
    <main className="w-full flex gap-[2.4rem] justify-center items-center  flex-col lg:flex-row mx-auto">
    {services.map( (val , key ) => (
    <div key={key} className='  shadow-2xl rounded-[10px] space-y-[1.5rem] p-[3rem]'>
    <img src={val.imgURL} alt="servers" width={60} height={60} className='bg-coral-red rounded-full p-[15px]' />
    <p className='font-bold text-[20px]'>{val.label}</p>
    <h2 className='text-justify text-gray-500'>{val.subtext}</h2>
    </div>
    ))}
    </main>
    </motion.section>
  )
}

export default Services
