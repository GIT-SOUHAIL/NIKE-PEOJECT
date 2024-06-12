/* eslint-disable react/no-unescaped-entities */
import Button from "./Button"
import {shoe8} from '../assets/images/index'
import { motion } from "framer-motion"
const Quality = () => {
  return (
    <section className="w-full mt-[1rem] mx-auto flex flex-col lg:flex-row  md:p-[4.5rem] lg:pl-[0px] xl:p-[4rem]">
      <motion.main
      initial={{opacity : 0 , x:-150}}
      whileInView={{opacity : 1 , x:0}}
      transition={{duration:1.6 , type:"keyframes"}}   
      className=" space-y-[1rem] text-center xl:text-start">
        <h2 className=" text-[40px] font-bold capitalize">
        we provide you 
        <span className="text-coral-red mx-2">super</span> <br />
        <span className="text-coral-red mr-2">Quality</span>
        shoes
        </h2>
        <p className=" text-justify  w-[60%] ml-[4.5rem] lg:w-[65%]  md:w-[60%] md:ml-[9rem] x6:ml-[7rem] lg:ml-[7rem] xl:ml-0 my-10">
        It seems like there might be a typo or a specific product name you 're referring
        to  Could you please clarify the name of the Nike shoe you're asking about</p>
        <Button text='View details' variant='bg-coral-red text-gray-100' />
      </motion.main>
      <motion.main
      initial={{opacity : 0 , x:150}}
      whileInView={{opacity : 1 , x:0}}
      transition={{duration:1.6 , type:"keyframes"}}  
      className="w-full my-[5rem] lg:my-0 ">
        <img src={shoe8} alt="shoes" width={400} height={400}  className=" xl:ml-[5rem] lg:ml-[3rem] mx-auto "/>
      </motion.main>
    </section>
  )
}

export default Quality
